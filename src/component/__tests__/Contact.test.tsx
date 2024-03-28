import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";

test("Contact component render correctly", () => {
  render(<Contact />);
  const myFullName = screen.getByTestId("myName");
  expect(myFullName.innerHTML).toBe("LÊ ANH SINH");
});

// describe(Contact, () => {
//   it("componentContact should be render", () => {
//     const { getByText } = render(<Contact />);
//     expect(getByText("LÊ ANH SINH")).toBeInTheDocument();
//   });
// });

test("avatar should be renderer", () => {
  render(<Contact />);
  const avatarImage = screen.getByRole("img");
  expect(avatarImage).toBeInTheDocument();
});
