class Square {
    constructor(color) {
       
        this.color = color;
    }

    draw () {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = Square;