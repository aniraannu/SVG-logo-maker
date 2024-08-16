// Imports the fs, inquirer, Circle, Square, and Triangle modules.
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//Imports the shapes module
const {Circle, Square, Triangle} = require("./lib/shapes");

//Define a SVG class that has a constructor that takes three arguments: text, textColor, and shape.
class SVG {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shape = "";
    }
    render() {
        throw new Error("Child class must implement a render() method.");
    }
    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape;
    }
}

//Define a SVGText class that extends the SVG class and has a constructor that takes two arguments: text and textColor.