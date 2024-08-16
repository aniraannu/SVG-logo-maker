// Imports the fs, inquirer and path
const inquirer = require("inquirer");
const { join } = require("path");
const fs = require('fs');
const { writeFile } = require('fs/promises');
//Imports the shapes module
const { Circle, Square, Triangle } = require("./lib/shapes");

//Define a SVG class that has a constructor that takes two arguments: text and shape.
class Svg {
  //Constructor
  //Text and shape elements are set to empty strings
  //Text element is set to the text argument and the color argument
  //Shape element is set to the shape argument and the color argument
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  //Render method returns the SVG string with the text and shape elements
  render() {
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  //Set text method sets the text element
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  //Set shape method sets the shape element
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}
//Array of questions for user input using inquirer prompt
const questions = [
  //Text input
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to three characters:",
  },
  //Text Color
  {
    type: "input",
    name: "textColor",
    message:
      "TEXT COLOR: Enter a color keyword or a hexadecimal number for the text color:",
  },
  //Shape input
  {
    type: "list",
    name: "shapetype",
    message: "SHAPE: Choose a shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
  //Shape color
  {
    type: "input",
    name: "shape",
    message:
      "SHAPE COLOR: Enter a color keyword or a hexadecimal number for the shape color:",
  },
];
// Function to write data to file
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

// Function to initialize app
async function init() {
  //Welcome Message
  console.log("Welcome to the Logo Generator!");
  console.log("Please answer the following questions to generate your logo.");
  var svgString = "";
  var svg_file = "logo.svg";
  
  //Prompt the user for input using inquirer
  const answers = await inquirer.prompt(questions);
  //User text input
  let user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    user_text = answers.text;
  } else {
    console.log("Invalid text input!");
    return;
  }
  console.log("User text: [" + user_text + "]");
  //User text color
  let user_textColor = answers.textColor;
  console.log("User text color: [" + user_textColor + "]");
    //user shape color
  let user_shapeColor = answers.shape;
  console.log("User shape color: [" + user_shapeColor + "]");
  //user shape type
  let user_shape_type = answers["shapetype"];
  console.log("User shape: [" + user_shape_type + "]");
  //User shape  
  let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
      user_shape = new Square();
      console.log("User selected Square shape");
    } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
      user_shape = new Circle();
      console.log("User selected Circle shape");
    } else if (
      user_shape_type === "Triangle" ||
      user_shape_type === "triangle"
    ) {
      user_shape = new Triangle();
      console.log("User selected Triangle shape");
    } else {
      console.log("Invalid shape!");
    }
    //set the color of the shape
    user_shape.setColor(user_shapeColor);
    //create a new SVG instance
    var svg = new Svg();
    svg.setTextElement(user_text, user_textColor);
    svg.setShapeElement(user_shape);
    svgString = svg.render();
    console.log(svgString);
    //write the SVG string to a file
    console.log("Generating logo.svg");
    console.log("Displaying shape:\n\n" + svgString);
    writeToFile(svg_file, svgString);
  
}
// Function call to initialize app
init();
