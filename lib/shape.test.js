const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

describe("Shapes", () => {
  describe("Circle", () => {
    test("renders correctly", () => {
      const circle = new Circle();
      circle.setColor("red");
      const expectedOutput = '<circle cx="150" cy="150" r="140" fill="red" />';
      expect(circle.render()).toBe(expectedOutput);
    });
  });

  describe("Square", () => {
    test("renders correctly", () => {
      const square = new Square();
      square.setColor("blue");
      const expectedOutput =
        '<rect x="10" y="10" width="280" height="280" fill="blue" />';
      expect(square.render()).toBe(expectedOutput);
    });
  });

  describe("Triangle", () => {
    test("renders correctly", () => {
      const triangle = new Triangle();
      triangle.setColor("green");
      const expectedOutput =
        '<polygon points="150,50 290,290 10,290" fill="green" />';
      expect(triangle.render()).toBe(expectedOutput);
    });
  });
});
