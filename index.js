const inquirer = require("inquirer");
const SVGGenerator = require("./lib/svgGenerator");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text should go inside of the SVG (at most 3 characters)?",
      validade: function (answer) {
        if (answer.length > 3) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color should the text be (must be a valid color or hexadecimal)?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape should the logo be?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color should the SVG be?",
    },
  ])
  .then(answers => {
    const svgGenerator = new SVGGenerator(answers);
    svgGenerator.generateSVG();
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
