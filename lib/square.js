const Shape = require("./shape");

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    const x = 10;
    const y = 10;
    const width = 280;
    const height = 280;
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
  }
}

module.exports = Square;
