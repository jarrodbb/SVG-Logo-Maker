//import from shapes.js
const { Circle, Triangle, Square } = require("./shapes");

//test for Circle
// Test that all render arguments are defined
describe("Circle", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const circle = new Circle();
      const result = circle.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  //Test to see if an error is thrown when a shapeColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const circle = new Circle();
      const result = circle.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color");
  });

  //Test to see if an error is thrown when a textColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const circle = new Circle();
      const result = circle.render("red", "", "XX");
    }).toThrow("Must include inputs for the text color");
  });

  //Test to see if an error is thrown when any text is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const circle = new Circle();
      const result = circle.render("red", "blue", "");
    }).toThrow("Must include inputs for the text");
  });
});

//test for Triangle
// Test that all render arguments are defined
describe("Triangle", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const triangle = new Triangle();
      const result = triangle.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  //Test to see if an error is thrown when a shapeColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const triangle = new Triangle();
      const result = triangle.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color");
  });

  //Test to see if an error is thrown when a textColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const triangle = new Triangle();
      const result = triangle.render("red", "", "XX");
    }).toThrow("Must include inputs for the text color");
  });

  //Test to see if an error is thrown when any text is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const triangle = new Triangle();
      const result = triangle.render("red", "blue", "");
    }).toThrow("Must include inputs for the text");
  });
});

//test for Square
// Test that all render arguments are defined
describe("Square", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const square = new Square();
      const result = square.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  //Test to see if an error is thrown when a shapeColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const square = new Square();
      const result = square.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color");
  });

  //Test to see if an error is thrown when a textColor is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const square = new Square();
      const result = square.render("red", "", "XX");
    }).toThrow("Must include inputs for the text color");
  });

  //Test to see if an error is thrown when any text is not inputted with the inquirer prompts
  test("throws an error", () => {
    expect(() => {
      const square = new Square();
      const result = square.render("red", "blue", "");
    }).toThrow("Must include inputs for the text");
  });
});
