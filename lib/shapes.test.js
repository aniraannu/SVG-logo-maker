// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module
const {Circle, Square, Triangle} = require("./shapes")

// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.
// Test for Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
    });
  });