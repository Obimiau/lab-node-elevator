class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval = ""
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
      this.log();
      if (this.requests.length != 0) {
        if (this.floor < this.requests[0]) {
          this.floorUp();
        } else {
          this.floorDown();
        }
      }

      _passengersEnter() {}
      _passengersLeave() {}

      floorUp() {
        this.direction = "Up";
        this.floor +=1;
      }

        floorDown() {
          this.direction = "Down";
          this.floor -=1;
        }

        call() {}
        log() {
          console.log("Direction " + this.direction);

        }
      }

      module.exports = Elevator;
