const inquirer = require('inquirer');
// const SVG = require('svg.js');
let logoChar = '';
let logoShape = '';
let colorname = '';
let hexCode = '';
let shapecolorName = '';
let shapehexCode = '';



  
function initOne () {
  return new Promise ((resolve, reject) => {   
   inquirer
   .prompt ([ 
    {
     type: 'input',
     name: 'logo_letters',
     message: 'Type 3 letters in uppercase for the LOGO'
    },
    
    {
    type: 'list',
    name: 'colorType',
    message: 'Choose the type of color:',
    choices: ['Color Name', 'Hexadecimal Code'],
     },
     
  ])
// const questions1 = ( ([
   
  .then((answers) => {
    const colorType = answers.colorType;
    logoChar = answers.logo_letters;

    if (colorType === 'Color Name') {
      // Prompt for color name
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'colorName',
            choices: ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'White', 'Brown' ]
          },

        ])
        .then((answers) => {
          colorname = answers.colorName;
        });
    } else if (colorType === 'Hexadecimal Code'){
       // Prompt for hexadecimal code
       inquirer
       .prompt([
         {
           type: 'input',
           name: 'hexCode',
           message: 'Enter a hexadecimal code:',
         },
       ])
       .then((answers) => {
         hexCode = answers.hexCode;                 
       });
      }
      
  })
  resolve();
});

}

async function initTwo () {
  inquirer
    .prompt([
    {
      type: 'list',
      name: 'shapeType',
      message: 'Select a shape for the Logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose the type of color for the Logo shape:',
      choices: ['Color Name', 'Hexadecimal Code'],
    },
  ])
  .then((answers) => {
    const shapeColorType = answers.shapeColor;
    logoShape = answers.shapType;

    if (shapeColorType === 'Color Name') {
      // Prompt for color name
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'shapecolorName',
            choices: ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'White', 'Brown' ]
          },
        ])
        .then((answers) => {
          shapecolorName = answers.colorname;
        });
    } else if (shapeColorType === 'Hexadecimal Code'){
       // Prompt for hexadecimal code
       inquirer
       .prompt([
         {
           type: 'input',
           name: 'shapehexCode',
           message: 'Enter a hexadecimal code for the shape:',
         },
       ])
       .then((answers) => {
         shapehexCode = answers.shapehexCode;                 
       });
      }
      
  });
}

// Call initOne and use await to wait for its completion
async function main () {
  await initOne();
  initTwo();
}

main();





  // initShape ()
  // callback ();





// function initShape () {
//   inquirer
//     .prompt([
//     {
//       type: 'list',
//       name: 'cshape',
//       message: 'Select a shape for the Logo:',
//       choices: ['circle', 'triangle', 'square'],
//     },
//     {
//       type: 'list',
//       name: 'shapeColor',
//       message: 'Choose the type of color for the Logo shape:',
//       choices: ['Color Name', 'Hexadecimal Code'],
//     },
//   ])
//   .then((answers) => {
//     shapecolorName = answers.shapeColor;

//     if (colorType === 'Color Name') {
//       // Prompt for color name
//       inquirer
//         .prompt([
//           {
//             type: 'list',
//             name: 'shapecolorName',
//             choices: ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'White', 'Brown' ]
//           },
//         ])
//         .then((answers) => {
//           colorname = answers.colorname;
//         });
//     } else if (colorType === 'Hexadecimal Code'){
//        // Prompt for hexadecimal code
//        inquirer
//        .prompt([
//          {
//            type: 'input',
//            name: 'shapehexCode',
//            message: 'Enter a hexadecimal code for the shape:',
//          },
//        ])
//        .then((answers) => {
//          shapehexCode = answers.shapehexCode;                 
//        });
//       }
      
//   });

// }

// init ();



  
  
 


  // inquirer.prompt(questions1).then((answers) => { });
  // inquirer.prompt(questions2).then((answers) => { });






  // .then(answers => {
  //   // Save the user's responses to a file or generate the SVG logo based on the input
  // })
  // .catch(error => {
  //   console.log('Error:', error);
  // });




  // Create an SVG canvas
// const canvas = SVG(document.documentElement);

// Create a circle shape
// const circle = canvas.circle(100).fill('blue').center(200, 200);

// // Save the SVG to a file
// canvas.svg({ filename: 'logo.svg' });