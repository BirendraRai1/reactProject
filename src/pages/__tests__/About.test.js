import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../Common/About/About";

describe("About Page Test Case", () => {
  it("Should load About component", () => {
    render(<About />); //This will render contact component to js dom
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });
});
