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

        floorDown() {}
        call() {}
        log() {
          console.log("Direction " + this.direction);

        }
      }

      module.exports = Elevator;


      // Write the code for the floorUp function to update the current floor by incrementing it by one. So, if the current floor was 0, it will become 1. If it's 3, it should become 4.
      //
      // Then, write the code for floorUp's sister function, floorDown. It should update the current floor by subtracting one from the current floor. So, if the current floor was 6, it will become 5.
