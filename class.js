"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}


class ColorRGBText extends Rectangle {
    constructor(height, width, text, backgroundcolor) {
        super(height,width);
        this.text = text;
        this.backgroundcolor = backgroundcolor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.backgroundcolor}`);
        
    }
}


const div = new ColorRGBText(25,10, "Привет мир", 'red')

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(180, 200);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// здесь мы соблюдаем ООПa
// fdfgf
// fvddbd
// gdfgfgd