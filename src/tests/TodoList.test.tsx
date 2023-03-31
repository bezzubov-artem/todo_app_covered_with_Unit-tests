import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "../components/TodoList";

test("renders a TodoItem for each todo in the todos prop", () => {
  const todos = ["Todo 1", "Todo 2", "Todo 3"];
  const handleDeleteMock = jest.fn();
  const { queryByText } = render(<TodoList todos={todos} onDelete={handleDeleteMock} />);

  todos.forEach((todo) => {
    expect(queryByText(todo)).toBeInTheDocument();
  });
});

test("calls onDelete with the correct index when Delete button is clicked", () => {
  const todos = ["Todo 1", "Todo 2", "Todo 3"];
  const handleDeleteMock = jest.fn();
  const { getAllByText } = render(<TodoList todos={todos} onDelete={handleDeleteMock} />);
  const deleteButtons = getAllByText("Delete");

  fireEvent.click(deleteButtons[1]);

  expect(handleDeleteMock).toHaveBeenCalledWith(1);
});
