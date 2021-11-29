import React from 'react'
import DummyChannel from './DummyChannel'

export default class StreamingConstructor {
  static myInstance = null

  dummyChannels = [
    new DummyChannel(5156, "Goddag", "Half bridge"),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "Goddag", "Half bridge", false),
  ]

  static getInstance() {
    if (StreamingConstructor.myInstance == null) {
      this.myInstance = new StreamingConstructor()
    }

    return this.myInstance
  }

  getChannels = () => {
    return this.dummyChannels
  }

  getChannelById = (id) => {
    for (let i = 0; i < this.dummyChannels.length; i++) {
      if (this.dummyChannels[i].id === id) {
        return this.dummyChannels[i]
      }
    }
    return null
  }

  getAllChannelIds = () => {
    return this.dummyChannels.map(channel => channel.id)
  }
}