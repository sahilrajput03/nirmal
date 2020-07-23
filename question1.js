console.log("========")
// class Banana(diameter){
//   constructor(diameter) {
//     this.diameter = diameter;
//   }
//   this.isYummy;
//   let rot = function () {
//     this.isYummy = false;
//   };
// }
console.log(20 / Math.PI)

module.exports = class Banana {
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
// let banana3 = new Banana()
// banana3.rot()
// console.log(banana3.isYummy) 