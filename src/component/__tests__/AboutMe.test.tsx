import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import AboutMe from "../AboutMe";

test("AboutMeComponent should be render", () => {
  render(<AboutMe />);
  expect(screen.getByTestId("about")).toBeInTheDocument();
});
