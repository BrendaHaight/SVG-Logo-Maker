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
      case "triangle":
        const triangle = new Triangle();
        triangle.setColor(shapeColor);
        shapeElement = triangle.render();
        break;
      case "square":
        const square = new Square();
        square.setColor(shapeColor);
        shapeElement = square.render();
        break;
      default:
        console.error("Invalid shape:", shape);
        return;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    ${shapeElement}
    <text x="150" y="150" text-anchor="middle" fill="${textColor}" font-size="50" dy=".3em">${text}</text>
    </svg>`;

    fs.writeFile("logo.svg", svgContent.trim(), err => {
      if (err) {
        console.error("Error writing SVG to file:", err);
      } else {
        console.log("SVG logo saved as logo.svg");
      }
    });
  }
}

module.exports = SVGGenerator;
