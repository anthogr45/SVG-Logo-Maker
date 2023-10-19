class Circle {
    constructor(radious, color){
        this.radious = radious;
        this.color = color;
    }

    draw() {

        return `<circle cx="150" cy="100" r="${this.radious}" fill="${this.color}" />`;
    }
}

module.exports = Circle;