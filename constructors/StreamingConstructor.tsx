import React from 'react'
import { RingBuffer, StreamingClient, TableBufferManager } from '@hbk/ui-streamingclient'

interface appProps {}
interface appState {
    signals: {
        signalId: string
        color: string
        dataBuffer: RingBuffer<number>
    }[]
    yMin: number
    yMax: number
    xDeltaInMs: number
    autoscale: boolean
    rollingXAxis: boolean
    modifiedValues: boolean
    [k: string]: string | boolean | any
  }

export default class StreamingConstructor<appProps, appState> {
  streamingClient: StreamingClient
  engineId: string
  tableBufferManager: TableBufferManager
  constructor() {
    this.state = {
      yMin: -1,
      yMax: 1,
      xDeltaInMs: 10000,
      autoscale: false,
      rollingXAxis: false,
      signals: [],
      modifiedValues: false,
      data: [
        {
          signalId: '1',
          color: '#51c0bc',
          data: [
            { x: -2, y: 3 },
            { x: 3, y: 8 },
            { x: 5, y: 12 },
            { x: 7, y: 16 },
            { x: 9, y: 25 },
          ],
        },
      ],
    }
  }

  async connect() {
    const graphqlurl = 'http://192.168.137.1:25702/'
    this.streamingClient = new StreamingClient(graphqlurl)

    this.engineId = await this.streamingClient.addGeneratorAsync()
    /*const generators = await streamingClient.getEngineIdsAsync()
const generatorIds = generators as any[]

engineId = generatorIds[0].id*/

    const signals = (await this.streamingClient.getSignalIdsForEngineAsync(
      this.engineId
    )) as { name: string; id: string }[]

    const signalArray: string[] = []
    signals.forEach((signal) => {
      signalArray.push(signal.id)
    })
    console.log('NUMBER OF SIGNALS IN STREAM: ' + signalArray.length)
    const streamId = (await this.streamingClient.createStreamAsync(
      this.engineId,
      signalArray,
      async () => {
        await this.streamingClient.startGeneratorAsync(this.engineId)
        let signalId =
          this.tableBufferManager.tableBuffers[0].tableSchema
            .dataSignalSchemas[0].signalId
        let dataBuffer = this.tableBufferManager.tableBuffers[0]
          .signalBuffers[signalId] as RingBuffer<number>
        let signal = { signalId, color: '#F00', dataBuffer }
        const array = []
        array.push(signal)
        signalId =
          this.tableBufferManager.tableBuffers[0].tableSchema
            .dataSignalSchemas[1].signalId
        dataBuffer = this.tableBufferManager.tableBuffers[0]
          .signalBuffers[signalId] as RingBuffer<number>
        signal = { signalId, color: '#0F0', dataBuffer }
        array.push(signal)
        this.setState({ signals: array })
      }
    )) as string

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const enableDataFlow =
      await this.streamingClient.enableDataFlowOnStreamAsync(
        streamId,
        true
      )

    this.tableBufferManager =
      this.streamingClient.getTableBufferManager(streamId)
  }


  static myInstance = null
  dummyChannels = [
    { name: 'The best sensor', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'RCS5607', type: 'Half bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'Ahhhhhh', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'The negotiator', type: 'Rosette bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'General Kenobi', type: 'Full bridge', id: 5156 },
    { name: 'This is getting', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'out of hand', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'now there are', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random() * 10000).toString() },
  ]

  static getInstance() {
    if (StreamingConstructor.myInstance == null) {
      this.myInstance = new StreamingConstructor()
    }

    return this.myInstance
  }

  getDummyData = () => {
    return this.dummyChannels
  }

  getDummyDataById = (id) => {
    for (let i = 0; i < this.dummyChannels.length; i++) {
      if (this.dummyChannels[i].id === id) {
        return this.dummyChannels[i]
      }
    }
    return null
  }

  getDummyIds = () => {
    return this.dummyChannels.map(channel => channel.id)
  }
}