import React from "react";
import { RingBuffer, StreamingClient, TableBufferManager } from '@hbk/ui-streamingclient'
import { ApolloClient, InMemoryCache } from "@apollo/client";

// This class might never work!

export default class StreamingConnector {
    streamingClient: StreamingClient
    engineId: string
    tableBufferManager: TableBufferManager

    async connect() {
        // URL
        const graphqlurl = 'http://192.168.137.1:25702/'
        //this.streamingClient = new StreamingClient(graphqlurl)

        /*const client = new ApolloClient({
            uri: graphqlurl + 'dataHighway/',
            cache: new InMemoryCache(),
            connectToDevTools: true,
        })*/

        /*const generators = await streamingClient.getEngineIdsAsync()
        const generatorIds = generators as any[]

        engineId = generatorIds[0].id

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
                //this.setState({ signals: array })
            }
        )) as string

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const enableDataFlow =
            await this.streamingClient.enableDataFlowOnStreamAsync(
                streamId,
                true
            )

        this.tableBufferManager = this.streamingClient.getTableBufferManager(streamId)*/
    }
}