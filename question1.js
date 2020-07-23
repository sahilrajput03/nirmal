

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
  //you can use simple es6's syntax too, i.e., const rot = () => thislisYummy = false;

}