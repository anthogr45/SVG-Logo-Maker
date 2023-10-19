const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/shapes/circle');
const Triangle = require('./lib/shapes/triangle');
const Square = require('./lib/shapes/square');
// const SVG = require('svg.js');



let logoChar;
let logoShape;
let textColor;
let hexCode;
let shapeColor;
let shapehexCode;



  
function initOne () {
  // return new Promise ((resolve, reject) => {   
  const prompQuestions = [
    {
     type: 'input',
     name: 'logo_letters',
     message: 'Type 3 letters in uppercase for the LOGO'
    },
    {
      type: 'list',
      name: 'shapetype',
      message: 'Select a shape for the Logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    
    {
    type: 'input',
    name: 'textcolor',
    message: 'Insert a color for the Logo letters [Color Name, Hexadecimal Code]:',
 
    },

    {
      type: 'input',
      name: 'shapecolor',
      message: 'Insert a color for the Logo shape [Color Name, Hexadecimal Code]:',
   
    },
     
  ]
  inquirer.prompt(prompQuestions).then((answers) => {

    logoChar = answers.logo_letters;
    textColor = answers.textcolor;
    logoShape = answers.shapetype;
    shapeColor = answers.shapecolor;

    let shapeObj;
    switch (logoShape) {
       case 'Circle':
         shapeObj = new Circle(360, shapeColor);
         break;
       case 'Triangle' :
         shapeObj = new Triangle(100, shapeColor);
         break;
       case 'Square' :
         shapeObj = new Square(100, 100, shapeColor);
         break;
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    ${shapeObj.draw()}
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="15" fill="${textColor}">ABC</text>
   </svg>
   `;
   
   // Save the svgContent to a file
   fs.writeFile('logo.svg', svgContent, (err) => {
     if (err) throw err;
     console.log('Logo created as logo.svg');
   });

  });

}
   


  initOne();
 

