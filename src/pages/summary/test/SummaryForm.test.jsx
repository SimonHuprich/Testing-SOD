import { render, fireEvent, screen } from "@testing-library/react";
import { SummaryForm } from "..SummaryForm/";

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
  expect(checkbox).not.toBeChecked();
});

test("checking checkbox enables button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
  const button = screen.getByRole("button", { name: "Button" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("unchecking checkbox again disables button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: "Disabled" });
  const button = screen.getByRole("button", { name: "Button" });
    
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
