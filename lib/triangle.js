const Shape = require("./shape");

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const points = "150,50 290,290 10,290";
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;