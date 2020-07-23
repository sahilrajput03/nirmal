class Banana {
  constructor(length, diameter, color) {
    this.length = length;
    this.diameter = diameter;
    this.color = 'yellow';
    this.isYummy = true
  }

  rot() {
    this.isYummy = false
  }
}


// module.exports = class Banana {
//   constructor(length, diameter, color) {
//     this.length = length;
//     this.diameter = diameter;
//     this.color = 'yellow';
//     this.isYummy = true
//   }

//   rot() {
//     this.isYummy = false
//   }

// }