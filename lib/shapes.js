class Shape {
  constructor(version, width, height, xmlns) {
    (this.version = "1.1"),
      (this.width = "300"),
      (this.height = "200"),
      (this.xmlns = "http://www.w3.org/2000/svg");
  }
  render() {}
}

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
    this.radius = "80";
    this.centreOffset = "150";
    this.downwardOffset = "100";
  }

  render(shapeColor, textColor, text) {
    if (shapeColor || textColor || text === "") {
      throw new Error(
        "Must include inputs for the shape color, text color and text"
      );
    }
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
    this.points = "150, 18 244, 182 56, 182";
  }

  render(shapeColor, textColor, text) {
    if (shapeColor || textColor || text === "") {
      throw new Error(
        "Must include inputs for the shape color, text color and text"
      );
    }
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points=${this.points} fill="${shapeColor}" />

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
    this.leftPosition = "90";
    this.topPosition = "40";
    this.width = "120";
    this.height = "120";
  }

  render(shapeColor, textColor, text) {
    if (shapeColor || textColor || text === "") {
      throw new Error(
        "Must include inputs for the shape color, text color and text"
      );
    }
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x=${this.leftPosition} y=${this.topPosition} width=${this.xParameter} height=${this.yParameter} fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };

console.log(Circle.radius);
