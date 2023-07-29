const { Circle, Triangle, Square } = require("./shapes");

//test for a selected shape it returns runs the right function

//test shape color must be included  must console log "error"

describe("Circle", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const circle = new Circle();
      const result = circle.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  test("throws an error", () => {
    expect(() => {
      const circle = new Circle();
      const result = circle.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color, text color and text");
  });
});

describe("Triangle", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const triangle = new Triangle();
      const result = triangle.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  test("throws an error", () => {
    expect(() => {
      const triangle = new Triangle();
      const result = triangle.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color, text color and text");
  });
});

describe("Square", () => {
  describe("render", () => {
    it("should require an input for the shape color", () => {
      const square = new Square();
      const result = square.render("red", "blue", "XX");

      expect(result).toBeDefined();
    });
  });

  test("throws an error", () => {
    expect(() => {
      const square = new Square();
      const result = square.render("", "blue", "XX");
    }).toThrow("Must include inputs for the shape color, text color and text");
  });
});

// test text must be included

// test text color must be included

// color must have hex code
