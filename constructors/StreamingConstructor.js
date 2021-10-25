import React from 'react'

export default class StreamingConstructor {
  static myInstance = null
  static dummyChannels = [
    { name: 'The best sensor', type: 'Full bridge', id: Math.random().toString() },
    { name: 'RCS5607', type: 'Half bridge', id: Math.random().toString() },
    { name: 'Ahhhhhh', type: 'Full bridge', id: Math.random().toString() },
    { name: 'The negotiator', type: 'Rosette bridge', id: Math.random().toString() },
    { name: 'General Kenobi', type: 'Full bridge', id: Math.random().toString() },
    { name: 'This is getting', type: 'Full bridge', id: Math.random().toString() },
    { name: 'out of hand', type: 'Full bridge', id: Math.random().toString() },
    { name: 'now there are', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', id: Math.random().toString() },
  ]

  static getInstance() {
    if (StreamingConstructor.myInstance == null) {
      StreamingConstructor = new StreamingConstructor()
    }

    return this.myInstance
  }

  static getDummyData() {
    //console.log(this.dummyChannels)
    return this.dummyChannels
  }
 
  static getDummyDataById(id) {
    for (let i = 0; i < this.dummyChannels.lenght; i++ ){
      if (this.dummyChannels[i].id === id){
        
        return this.dummyChannels[i]
      }
    }
    return null
  }
}