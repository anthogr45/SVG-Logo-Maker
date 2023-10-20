const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/shapes/circle');
const Triangle = require('./lib/shapes/triangle');
const Square = require('./lib/shapes/square');


let logoChar;
let logoShape;
let textColor;
let shapeColor;
  
function initOne () {
  
  const prompQuestions = [   //Prompts to get the user input
    {
     type: 'input',
     name: 'logo_letters',
     message: 'Type 3 letters in uppercase for the LOGO'
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Insert a color for the Logo letters [Color Name, Hexadecimal Code]:',
    },
    {
      type: 'list',
      name: 'shapetype',
      message: 'Select a shape for the Logo:',
      choices: ['Circle', 'Triangle', 'Square'],
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
    switch (logoShape) {    // Conditions to switch between shapes and create object instances
       case 'Circle':
         shapeObj = new Circle(shapeColor);
         break;
       case 'Triangle' :
         shapeObj = new Triangle(shapeColor);
         break;
       case 'Square' :
         shapeObj = new Square(shapeColor);
         break;
    }
     // generating the SVG logo.svg
    const svgContent = `  
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
    
    ${shapeObj.draw()}                     
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="15" fill="${textColor}">${logoChar}</text>

   </svg>
   `;
   
   // Save the svgContent to a file
   fs.writeFile('logo.svg', svgContent, (err) => {
     if (err) throw err;
     console.log('Generated SVG logo successfully as logo.svg');
   });

  });

}
   
initOne();
 

