//Define Class Shape 
class Shape{
    //constructor intializing 'color'
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // Defines a Circle class that extends Shape
    class Circle extends Shape{
        render(){
            return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
        }
    }
    // Defines a Square class that extends Shape
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        }
    }
    // Defines a Triangle class that extends Shape
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
        }
    };
    
    module.exports = {Circle, Square, Triangle}