import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Skills from "../Skills";


test("SkillsComponent should be render", () => {
  render(<Skills />);
  expect(screen.getByTestId("ski")).toBeInTheDocument();
});
