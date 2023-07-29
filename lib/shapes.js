//Shape class
class Shape {
  constructor(version, width, height, xmlns) {
    (this.version = "1.1"),
      (this.width = "300"),
      (this.height = "200"),
      (this.xmlns = "http://www.w3.org/2000/svg");
  }
  render() {}
}

//Circle constructed from the Shape class
class Circle extends Shape {
  constructor(
    version,
    width,
    height,
    xmlns,
    centreOffset,
    downwardOffset,
    radius
  ) {
    super(version, width, height, xmlns);
    this.radius = "80"; //circle includes a radius
    this.centreOffset = "150"; //circle includes an offset
    this.downwardOffset = "100"; //circle includes a downward offset
  }

  //Render function to create a svg file
  render(shapeColor, textColor, text) {
    //check shapeColor was inputted with a value
    if (shapeColor === "") {
      throw new Error("Must include inputs for the shape color"); // throw an error if no shapeColor
    }
    //check text color was inputted with a value
    if (textColor === "") {
      throw new Error("Must include inputs for the text color"); // throw an error if no textColor
    }
    //check if text was inputted with a value
    if (text === "") {
      throw new Error("Must include inputs for the text"); // throw an error if no text
    }

    //else if all values were included, return the svg file
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="${this.centreOffset}" cy="${this.downwardOffset}" r="${this.radius}" fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
  }
}

class Triangle extends Shape {
  constructor(version, width, height, xmlns, points) {
    super(version, width, height, xmlns);
    this.points = "150, 18 244, 182 56, 182"; //triangle includes points
  }

  render(shapeColor, textColor, text) {
    //check shapeColor was inputted with a value
    if (shapeColor === "") {
      throw new Error("Must include inputs for the shape color"); // throw an error if no shapeColor
    }
    //check text color was inputted with a value
    if (textColor === "") {
      throw new Error("Must include inputs for the text color"); // throw an error if no textColor
    }
    //check if text was inputted with a value
    if (text === "") {
      throw new Error("Must include inputs for the text"); // throw an error if no text
    }
    //else if all values were included, return the svg file
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="${this.points}" fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
  }
}

class Square extends Shape {
  constructor(
    version,
    width,
    height,
    xmlns,
    leftPosition,
    topPosition,
    xParameter,
    yParameter
  ) {
    super(version, width, height, xmlns);
    this.leftPosition = "90"; //square includes a left Position
    this.topPosition = "40"; //square includes a top position
    this.xParameter = "120"; // square includes a width
    this.yParameter = "120"; // square includes a height
  }

  render(shapeColor, textColor, text) {
    //check shapeColor was inputted with a value
    if (shapeColor === "") {
      throw new Error("Must include inputs for the shape color"); // throw an error if no shapeColor
    }
    //check text color was inputted with a value
    if (textColor === "") {
      throw new Error("Must include inputs for the text color"); // throw an error if no textColor
    }
    //check if text was inputted with a value
    if (text === "") {
      throw new Error("Must include inputs for the text"); // throw an error if no text
    }
    //else if all values were included, return the svg file
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="${this.leftPosition}" y="${this.topPosition}" width="${this.xParameter}" height="${this.yParameter}" fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
  }
}

//export
module.exports = { Circle, Triangle, Square };
