import React, { useState } from "react";
import styled from "styled-components";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const EmptyState = styled.p`
  text-align: center;
`;

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <AppContainer>
      <Title>My Todo List</Title>
      <AddTodo onAdd={handleAddTodo} />
      {todos.length === 0 ? (
        <EmptyState>No todos yet!</EmptyState>
      ) : (
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      )}
    </AppContainer>
  );
}

export default App;
