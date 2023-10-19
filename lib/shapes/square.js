class Square {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw () {
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

module.exports = Square;