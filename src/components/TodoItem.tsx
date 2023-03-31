import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  text: string;
  onDelete: () => void;
}

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TodoItemText = styled.span`
  font-size: 18px;
`;

const TodoItemDeleteButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete }) => {
  return (
    <TodoItemContainer>
      <TodoItemText>{text}</TodoItemText>
      <TodoItemDeleteButton onClick={onDelete}>Delete</TodoItemDeleteButton>
    </TodoItemContainer>
  );
};
