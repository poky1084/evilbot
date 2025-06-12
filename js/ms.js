class MySpeed {
  constructor(seconds, bets, speed) {
    this.seconds = seconds || 0;
    this.bets = bets || 0;
    this.speed = speed || 0;
  }
  start() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.speed = Math.floor((this.bets / this.seconds) * 100) / 100;
      document.getElementById("wdbSpeed").innerText = this.speed;
    }, 1e3);
  }
  pause() {
    clearInterval(this.interval);
  }
  stop() {
    this.seconds = 0;
    this.bets = 0;
    this.speed = 0;
  }
}
