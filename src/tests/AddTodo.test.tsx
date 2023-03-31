import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddTodo } from "../components/AddTodo";

test("calls onAdd when Add button is clicked with non-empty input", () => {
  const handleAddMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodo onAdd={handleAddMock} />);
  const input = getByPlaceholderText("Add a new todo...");
  const addButton = getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(handleAddMock).toHaveBeenCalledWith("New Todo");
});

test("does not call onAdd when Add button is clicked with empty input", () => {
  const handleAddMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodo onAdd={handleAddMock} />);
  const input = getByPlaceholderText("Add a new todo...");
  const addButton = getByText("Add");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(addButton);

  expect(handleAddMock).not.toHaveBeenCalled();
});
