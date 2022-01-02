export default class DummyChannel {
    constructor(id, name, type, connectionStatus) {
        this.name = name
        this.type = type
        this.id = id
        this.channelData = [{ x: 0, y: 0 }]
        this.interval = null
        this.connectionStatus = connectionStatus
    }
    generateDataPoint = () => {
        this.channelData.push({ x: (this.channelData[this.channelData.length - 1].x + 0.1), y: ((Math.random() * 10) - 5) })
        return [...this.channelData]
    }

    getChannelData = () => {
        return this.channelData
    }

    getLatestDataPoint = () => {
        return this.channelData[this.channelData.length - 1]
    }

    getId = () => {
        return this.id
    }

    getName = () => {
        return this.name
    }

    getType = () => {
        return this.type
    }

    getConnectionStatus = () => {
        return this.connectionStatus
    }
}