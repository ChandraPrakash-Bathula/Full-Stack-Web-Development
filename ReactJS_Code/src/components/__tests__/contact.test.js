import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Page Test Cases", () => {
  beforeAll(() => {
    console.log("This function Comes before all the test cases.");
  });
  beforeEach(() => {
    console.log("This function Comes before each of the test case.");
  });
  afterAll(() => {
    console.log("This function Comes after all the test cases.");
  });
  afterEach(() => {
    console.log("This function Comes after each of the test case.");
  });
  it("Should Load Title in Contact US Component", () => {
    //Render:
    render(<Contact />);

    //Query:
    const heading = screen.getByRole("heading"); //h1 - h6
    const text = screen.getByPlaceholderText("name");

    //Assertion:
    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("Should Load Button in Contact US Component", () => {
    //Render:
    render(<Contact />);

    //Query:
    const button = screen.getByRole("button");

    //Assertion:
    expect(button).toBeInTheDocument();
  });

  test("Should Load all the input boxes in Contact US Component", () => {
    //Render:
    render(<Contact />);

    //Query:
    const inputBox = screen.getAllByRole("textbox"); //getByRole is for an independent element & getAllByRole gets all the elements of the role.

    //Assertion:
    console.log(inputBox.length);
    expect(inputBox.length).toBe(2);
    expect(inputBox.length).toBeGreaterThan(1);
    expect(inputBox.length).not.toBe(3);
  });
});
