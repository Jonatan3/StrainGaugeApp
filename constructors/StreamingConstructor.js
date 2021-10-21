import React from 'react'

export default class StreamingConstructor {
  static myInstance = null
  static dummyChannels = [
    { name: 'The best sensor', type: 'Full bridge', key: 1 },
    { name: 'RCS5607', type: 'Half bridge', key: 2 },
    { name: 'Ahhhhhh', type: 'Full bridge', key: 3 },
    { name: 'The negotiator', type: 'Rosette bridge', key: 4 },
    { name: 'General Kenobi', type: 'Full bridge', key: 5 },
    { name: 'This is getting', type: 'Full bridge', key: 6 },
    { name: 'out of hand', type: 'Full bridge', key: 7 },
    { name: 'now there are', type: 'Full bridge', key: 8 },
    { name: 'two of them', type: 'Full bridge', key: 9 },
    { name: 'two of them', type: 'Full bridge', key: 10 },
    { name: 'two of them', type: 'Full bridge', key: 11 },
    { name: 'two of them', type: 'Full bridge', key: 12 },
    { name: 'two of them', type: 'Full bridge', key: 13 },
    { name: 'two of them', type: 'Full bridge', key: 14 },
    { name: 'two of them', type: 'Full bridge', key: 15 },
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
    for (let i = 0; i < dummyChannels.lenght; i++ ){
      if (this.dummyChannels[i].key == id){
        return this.dummyChannels[i]
      }
    }
    return null
  }
}