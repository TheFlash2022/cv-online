import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Experiences from "../Experiences";
test("ExperiencesComponent should be render", () => {
  render(<Experiences />);
  expect(screen.getByTestId("ex")).toBeInTheDocument();
});
