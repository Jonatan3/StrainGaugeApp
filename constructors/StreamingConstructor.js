import React from 'react'

export default class StreamingConstructor {
  static myInstance = null
  static dummyChannels = [
    { name: 'The best sensor', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'RCS5607', type: 'Half bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'Ahhhhhh', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'The negotiator', type: 'Rosette bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'General Kenobi', type: 'Full bridge', id: 5156 },
    { name: 'This is getting', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'out of hand', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'now there are', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.floor(Math.random()*10000).toString() },
  ]

  static getInstance() {
    if (StreamingConstructor.myInstance == null) {
      StreamingConstructor = new StreamingConstructor()
    }

    return this.myInstance
  }

  static getDummyData() {
    return this.dummyChannels
  }
 
  static getDummyDataById(id) {
    for (let i = 0; i < this.dummyChannels.length; i++ ){
      if (this.dummyChannels[i].id === id){
        return this.dummyChannels[i]
      }
    }
    return null
  }
}