class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.currentMilliseconds = 0
    }

  start(printTimeCallback, printMilliseconds) {
    this.intervalId = setInterval (() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 1000)

    this.milliesecondsIntervalId = setInterval (() => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0
      }
      this.currentMilliseconds ++
      if (printMilliseconds) printMilliseconds()
    }, 10)
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin
  }

  getSeconds() {
    
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId)
    }

  reset() {
    this.currentTime = 0
    this.currentMilliseconds = 0
  }
    

  split() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.currentMilliseconds); // <= BONUS 

    return `${minutes}:${seconds}:${milliseconds}`; // <= BONUS (comentado porque no pasa los tests sino) 
    }
}
