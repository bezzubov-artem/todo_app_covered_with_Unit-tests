import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem";

const TodoListContainer = styled.div`
  margin-top: 20px;
`;

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </TodoListContainer>
  );
};
