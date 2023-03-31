import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../components/TodoItem";

test("calls onDelete when Delete button is clicked", () => {
  const handleDeleteMock = jest.fn();
  const { getByText } = render(<TodoItem text="Todo" onDelete={handleDeleteMock} />);
  const deleteButton = getByText("Delete");

  fireEvent.click(deleteButton);

  expect(handleDeleteMock).toHaveBeenCalled();
});
