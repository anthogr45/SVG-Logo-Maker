const Circle = require('../shapes/circle');
const Triangle = require('../shapes/triangle');
const Square = require('../shapes/square');


describe('Triangle', () => {     //Test script to test the Shape Triangle with color name and hexadecimal value
  it('renders the correct SVG string for a green triangle', () => {
    const testcolor = "red"
    const triangle = new Triangle(testcolor);
    expect(triangle.draw()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="red" />');
  });

  it('renders the correct SVG string for a hexadecimal value (green) triangle', () => {
    const testcolor = "#177245"
    const triangle = new Triangle(testcolor);
    expect(triangle.draw()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="#177245" />');
  });
});


describe('Circle', () => {  //Test script to test the Shape Circle with color name and hexadecimal value
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

describe('Square', () => {   //Test script to test the Shape Square with color name and hexadecimal value
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