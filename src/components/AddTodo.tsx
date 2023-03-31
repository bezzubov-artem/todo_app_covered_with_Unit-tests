import React, { useState } from "react";
import styled from "styled-components";

const AddTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const AddTodoInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 18px;
`;

const AddTodoButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #388e3c;
  }
`;

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddClick = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <AddTodoContainer>
      <AddTodoInput
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={handleInputChange}
      />
      <AddTodoButton onClick={handleAddClick}>Add</AddTodoButton>
    </AddTodoContainer>
  );
};
