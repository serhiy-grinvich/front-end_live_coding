// function sayHi() {
//   console.log(this.userName);
// }
// sayHi();

// const user = {
//   userName: 'Serhii',
// };

// const sayHiBinded = sayHi.bind(user);
// sayHiBinded();

//timer
// let intervalID;
export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalID: '',
  startTimer() {
    this.intervalID = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      this.secondsPassed += 1;
    }, 1000);
  },
  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
