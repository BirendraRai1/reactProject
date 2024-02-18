import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Common/Components/Login/Login";

describe("Login Page Test Case", () => {
  it("Should load Login component", () => {
    render(<Login />); //This will render contact component to js dom
    const inputName = screen.getByPlaceholderText("xyz@gmail.com");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Login />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });
});
