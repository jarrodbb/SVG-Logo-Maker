const { Circle, Triangle, Square } = require("./shapes");

// const circle = new Circle("80", "150", "100");

// console.log(circle.radius);

class SVG {
  constructor() {
    this.shapeType = "";
  }

  // constructor(text, textColor, shapeType, shapeColor) {
  //   this.text = text;
  //   this.textColor = textColor;
  //   this.shapeType = shapeType;
  //   this.shapeColor = shapeColor;
  // }

  render(shapeEl, shapeColor, textColor, text) {
    return `<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <${shapeEl} ${this.shapeType} fill="${shapeColor}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>`;
  }

  setText() {
    // if (this.text.length > 3) {
    //   return console.log("Must not be more than 3 characters");
    // }

    setShape();
  }

  setShape(shape) {
    // const shapeInput = "";
    if (shape == "circle") {
      console.log("circle");
      this.shapeType = `cx="150" cy="100" r="80"`;
      console.log(this.shapeType);
      // render(shapeInput);
    }
    if (shape === "square") {
      this.shapeInput = 'x="90" y="40" width="120" height="120"';
      console.log("square");
      // render(shapeInput);
    }
    if (shape === "triangle") {
      this.shapeInput = `points="150, 18 244, 182 56, 182"`;
      console.log("triangle");
      // render(shapeInput);
    }
  }
}

module.exports = SVG;

/// where return svg. called after inquier
