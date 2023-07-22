import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import MyProject from "../MyProject";

test("MyProjectComponent should be render", () => {
  render(<MyProject />);
  expect(screen.getByTestId("myProject")).toBeInTheDocument();
});
