class Circle {
    constructor(color){
       
        this.color = color;
    }

    draw() {

        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}

module.exports = Circle;