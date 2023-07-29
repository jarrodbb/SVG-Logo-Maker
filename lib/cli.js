const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");

const SVG = require("./svg");

const { Circle, Triangle, Square } = require("./shapes");

class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "nameOfLogo",
          message: "Please name this logo",
        },
        {
          type: "input",
          name: "text",
          message:
            "Enter text for the logo. (Must not be more than 3 characters",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter text color",
        },
        {
          type: "list",
          name: "shapeType",
          message: "Select a shape",
          choices: ["circle", "square", "triangle"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter shape color",
        },
      ])
      .then(({ nameOfLogo, text, textColor, shapeType, shapeColor }) => {
        if (text.length > 3) {
          console.log("please check your input. Max character is 3");
          return this.run();
        }
        if (shapeType === "circle") {
          const circle = new Circle();

          const circleLogo = circle.render(shapeColor, textColor, text);
          console.log("hello");

          const cicleFileName = join(
            __dirname,
            "..",
            "examples",

            "test1.svg"
          );

          writeFile(cicleFileName, circleLogo);

          console.log("successfully created the logo " + nameOfLogo);
        }

        if (shapeType === "square") {
          const square = new Square();

          const squareLogo = square.render(shapeColor, textColor, text);
          console.log("hello");

          const squareFileName = join(
            __dirname,
            "..",
            "examples",

            "test2.svg"
          );

          writeFile(squareFileName, squareLogo);

          console.log("successfully created the logo " + nameOfLogo);
        }

        if (shapeType === "triangle") {
          const triangle = new Triangle();

          const triangleLogo = triangle.render(shapeColor, textColor, text);
          console.log("hello");

          const triangleFileName = join(
            __dirname,
            "..",
            "examples",

            "test3.svg"
          );

          writeFile(triangleFileName, triangleLogo);

          console.log("successfully created the logo " + nameOfLogo);
        }
      })
      .then(() => console.log("Created logo. check it out"))
      .catch((err) => {
        console.log(err);
        console.log("Something went wrong. Check your inputs and try again");
      });
  }
}

module.exports = CLI;
