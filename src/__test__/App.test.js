import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.jsx";

it("renders a header in app component", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
