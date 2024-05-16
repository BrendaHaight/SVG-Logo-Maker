const Shape = require("./shape");

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    const cx = 150;
    const cy = 150;
    const r = 140;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
  }
}

module.exports = Circle;
