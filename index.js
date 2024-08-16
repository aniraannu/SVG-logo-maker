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