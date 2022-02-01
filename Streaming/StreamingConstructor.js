import DummyChannel from './DummyChannel'

export default class StreamingConstructor {
  static myInstance = null

  dummyChannels = [
    new DummyChannel(5156, "H236BWO", "Half bridge"),
    new DummyChannel(Math.floor(Math.random() * 10000), "E637BPO", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "J224BW9", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "M236BWO", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "E991UEI", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "D419PCG", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "D897ODK", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "I354CPN", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "G896DIS", "Half bridge", true),
    new DummyChannel(Math.floor(Math.random() * 10000), "C483DOE", "Half bridge", false),
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