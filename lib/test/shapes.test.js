const Circle = require('../shapes/circle');
const Triangle = require('../shapes/triangle');
const Square = require('../shapes/square');


describe('Triangle', () => {
  it('renders the correct SVG string for a green triangle', () => {
    const testcolor = "red"
    const triangle = new Triangle(testcolor);
    // triangle.setColor('blue');
    expect(triangle.draw()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="red" />');
  });

  it('renders the correct SVG string for a hexadecimal value (green) triangle', () => {
    const testcolor = "#177245"
    const triangle = new Triangle(testcolor);
    // triangle.setColor('blue');
    expect(triangle.draw()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="#177245" />');
  });
});


describe('Circle', () => {
  it('renders the correct SVG string for a green circle', () => {
    const testcolor = "red"
    const circle = new Circle(testcolor);  
    expect(circle.draw()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');
  });

  it('renders the correct SVG string for a hexadecimal value (green) circle', () => {
    const testcolor = "#177245"
    const circle = new Circle(testcolor);  
    expect(circle.draw()).toEqual('<circle cx="150" cy="150" r="100" fill="#177245" />');
  });
});

describe('Square', () => {
  it('renders the correct SVG string for a green squre', () => {
    const testcolor = "red"
    const square = new Square(testcolor);  
    expect(square.draw()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });

  it('renders the correct SVG string for a hexadecimal value (green) squre', () => {
    const testcolor = "#177245"
    const square = new Square(testcolor);  
    expect(square.draw()).toEqual('<rect x="50" y="50" width="200" height="200" fill="#177245" />');
  });
});