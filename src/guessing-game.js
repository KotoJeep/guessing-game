class GuessingGame {
  
  constructor() {
    let middle
  }
  
  setRange(min, max) {
    this.min = min
    this.max = max
  }
  
  guess() {
    this.middle = Math.round((this.min + this.max) / 2)
    return this.middle
  }
  
  lower() {
    this.max = this.middle
    return this.guess()
  }
  
  greater() {
    this.min = this.middle
    return this.guess()
  }
}

module.exports = GuessingGame;
