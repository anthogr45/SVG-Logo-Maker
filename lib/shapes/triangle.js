class Triangle {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    draw () {

        const height = (Math.sqrt(3) / 2) * this.sideLength;
        const points = `50,${50 + height / 2} ${50 - this.sideLength / 2},${50 - height / 2} ${50 + this.sideLength / 2},${50 - height / 2}`;

        return `<polygon points = "${points}" fill = "${this.color}" />`;

    }

}

module.exports  =Triangle;