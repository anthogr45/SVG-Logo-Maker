class Triangle {
    constructor(color) {
        
        this.color = color;
    }

    draw () {

        // const height = (Math.sqrt(3) / 2) * this.sideLength;
        // const points = `50,${50 + height / 2} ${50 - this.sideLength / 2},${50 - height / 2} ${50 + this.sideLength / 2},${50 - height / 2}`;

        return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}" />`;

    }

}

module.exports  =Triangle;