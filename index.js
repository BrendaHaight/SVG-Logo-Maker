const inquirer = require("inquirer");

inquirer.prompt([
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
]);
