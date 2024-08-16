// Imports the fs, inquirer and path
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//Imports the shapes module
const {Circle, Square, Triangle} = require("./lib/shapes");

//Define a SVG class that has a constructor that takes two arguments: text and shape.
class SVG {
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
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    //Set text method sets the text element
    setText(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    //Set shape method sets the shape element
    setShape(shape) {
        this.shapeElement = shape.render()
    }
}
//Array of questions for user input using inquirer prompt
const questions = [
    //Text input
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to three characters:',
        validate: function (input) {
            if (input.length > 3) {
                return 'Please enter up to three characters.';
            }
            return true;
        }
    },
    //Text Color
    {
        type: 'input',
        name: 'textColor',
        message: 'TEXT COLOR: Enter a color keyword or a hexadecimal number for the text color:',
    },
    //Shape input
    {
        type: 'list',
        name: 'shape',
        message: 'SHAPE: Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    //Shape color
    {
        type: 'input',
        name: 'shapeColor',
        message: 'SHAPE COLOR: Enter a color keyword or a hexadecimal number for the shape color:',
    },
];
// Function to write data to file
function writeToFile(fileName, data) {
    writeFile(join(__dirname, fileName), data, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}
// Function to initialize app
function init() {
    //Welcome Message
    console.log('Welcome to the Logo Generator!');
    console.log('Please answer the following questions to generate your logo.');
    //Prompt the user for input using inquirer
    inquirer.prompt(questions)
        .then((answers) => {
            const { text, textColor, shape, shapeColor } = answers;
            let shapeObject;
            switch (shape) {
                case 'Circle':
                    shapeObject = new Circle();
                    break;
                case 'Square':
                    shapeObject = new Square();
                    break;
                case 'Triangle':
                    shapeObject = new Triangle();
                    break;
            }
            shapeObject.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shapeObject);
            const svgString = svg.render();
            writeToFile('logo.svg', svgString);
        });
}
// Function call to initialize app
init();
