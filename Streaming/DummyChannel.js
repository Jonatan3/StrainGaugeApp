import React from "react"

export default class DummyChannel {    
    constructor(id) {
        this.id = id
        this.channelData = [{ x: 0, y: 0 }]
        this.interval = null
    }
    
    startDataGeneration = () => {
        if (this.interval !== null) {
            return;
        }
        this.interval = setInterval(this.generateDataPoint(), 200)
    }

    generateDataPoint = () => {
        this.channelData.push({ x: 1, y: 1 })
    }

    getChannelData = () => {
        return this.channelData
    }
}