const fs = require("fs");
const Square = require("./square");
const Circle = require("./circle");
const Triangle = require("./triangle");

class SVGGenerator {
  constructor(answers) {
    this.answers = answers;
  }

  generateSVG() {
    const { text, textColor, shape, shapeColor } = this.answers;

    let shapeElement;
    switch (shape) {
      case "circle":
        const circle = new Circle();
        circle.setColor(shapeColor);
        shapeElement = circle.render();
        break;
    }
  }
}
