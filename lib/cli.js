//import inquirer
const inquirer = require("inquirer");
const { join } = require("path"); // be able to use the join method
const { writeFile } = require("fs/promises"); //use the promises version of fs.writeFile
const fs = require("fs"); //import fs to be able to check folder lenght

//import from shapes.js
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
  //   run inquirer prompts
  run() {
    return (
      inquirer
        //prompts for creating logo
        .prompt([
          {
            type: "input",
            name: "text",
            message:
              "Enter text for the logo. (Must not be more than 3 characters)",
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
        //deconstructs keys from inquirer
        .then(({ text, textColor, shapeType, shapeColor }) => {
          //check if text input is greater than 3. if it is console message and rerun prompt
          if (text.length > 3) {
            console.log("please check your input. Max character is 3");
            return this.run();
          }
          // Check if selected shape is a circle.
          if (shapeType === "circle") {
            const circle = new Circle(); // initiate a new constant with the Circle class

            const circleLogo = circle.render(shapeColor, textColor, text); //run the render function on the circle class to generate the svg file

            let nameOfLogoFile = ""; //Empty variable for naming convention

            const filePath = fs.readdirSync("examples"); //Checks to se how many logos have already been saved

            const filePathelength = filePath.length; //gets the length of the folder

            //if the length is greater than 1 then there is already a saved logo. this will amend the file structure in a sequential order
            if (filePath.length === 1) {
              nameOfLogoFile = "examples/logo.svg";
            } else if (filePath.length >= 0) {
              const newLength = filePathelength - 1;
              nameOfLogoFile = `examples/logo_${newLength + 1}.svg`;
            }

            writeFile(nameOfLogoFile, circleLogo); // writes the file using promises with the correct filename so logos are not written over

            console.log("Generated logo.svg"); // Consoles a message after file has been written
          }

          //checks if the selected shape is a square
          if (shapeType === "square") {
            const square = new Square();

            const squareLogo = square.render(shapeColor, textColor, text);

            let nameOfLogoFile = "";

            const filePath = fs.readdirSync("examples");

            const filePathelength = filePath.length;

            if (filePath.length === 1) {
              nameOfLogoFile = "examples/logo.svg";
            } else if (filePath.length >= 0) {
              const newLength = filePathelength - 1;
              nameOfLogoFile = `examples/logo_${newLength + 1}.svg`;
            }

            writeFile(nameOfLogoFile, squareLogo);

            console.log("Generated logo.svg");
          }

          //checks if the selected shape is a triangle
          if (shapeType === "triangle") {
            const triangle = new Triangle();

            const triangleLogo = triangle.render(shapeColor, textColor, text);

            let nameOfLogoFile = "";

            const filePath = fs.readdirSync("examples");

            const filePathelength = filePath.length;

            if (filePath.length === 1) {
              nameOfLogoFile = "examples/logo.svg";
            } else if (filePath.length >= 0) {
              const newLength = filePathelength - 1;
              nameOfLogoFile = `examples/logo_${newLength + 1}.svg`;
            }

            writeFile(nameOfLogoFile, triangleLogo);

            console.log("Generated logo.svg");
          }
        })
        //console logs another confirmation message
        .then(() => console.log("Created logo. check it out"))
        // catches any errors
        .catch((err) => {
          console.log(err); // console logs error message
          console.log("Something went wrong. Check your inputs and try again"); //console logs message to inform the user to try again
        })
    );
  }
}

module.exports = CLI;
