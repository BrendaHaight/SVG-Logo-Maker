# SVG-Logo-Maker

This project is a command-line tool that generates customizable SVG logos. Users can specity the text, text color, shape, and shape color to create a unique SVG logo. The tool supports three shapes: circle, square, and triangle.

# Features

- Generate an SVG logo with customizable text, text color, shape, and shape color.
- Supports three shapes: circle, square, and triangle.
- Saves the generated SVG to a file.

## Prerequisites

- Node.js(version 14 or higher)

## Installation

1. Clone the repository

git clone https://github.com/BrendaHaight/SVG-Logo-Maker.git

2. Navigate to the project directory:

cd SVG-Logo-Maker

3. Install the dependencies:

npm install

## Usage

1. Run the application:

node index.js

2. Follow the prompts to enter the text, text color, shape, and shape color. The text should be at most 3 characters long.

3. The generated SVG logo will be saved as `logo.svg` in the project directory.

## Example

Here is an example of how to use the tool:

- $ node index.js
- ? What text should go inside of the SVG (at most 3 characters)? ABC
- ? What color should the text be (must be a valid color or a hexadecimal)? #FFFFFF
- ? What shape should the logo be? circle
- ? What color should the shape be ? #0000FF

SVG logo saved as logo.svg

[!Demonstration](https://drive.google.com/file/d/1opUnk1I8tniO6ZYF4ZWnccmWBHXDU497/view)

! [Triangle](/examples/Triangle.png)
! [Circle](/examples/Circle.png)
! [Square](/examples/Square.png)

## Running Tests

To run the tests for the shape classes, use the following command:

npm test

The tests are written using Jest and can be found in the test/test.js file.

Project Structure

- index.js: The main entry point of the application. Handles user prompts and generates the SVG.
- lib/shape.js: Base class for shapes.
- lib/circle.js: Circle shape class.
- lib/square.js: Square shape class.
- lib/triangle.js: Triangle shape class.
- lib/svgGenerator.js: SVG generator class that creates the SVG content and writes it to a file.
- lib/shape.test.js: Test file for the shape classes.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License.
