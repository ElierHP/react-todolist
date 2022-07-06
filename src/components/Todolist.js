import React, { useState } from "react";
import AddForm from "./AddForm";
import Todo from "./Todo";

export default function Todolist() {
  const [todos, setTodos] = useState([]);

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const saveTask = (id, inputValue, setEditing) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          name: inputValue,
          id: todo.id,
          completed: false,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    setEditing(false);
  };

  return (
    <main>
      <h1>Todolist</h1>

      {/* Add New Task */}
      <AddForm todos={todos} setTodos={setTodos} />

      {/* Render Todos */}
      <ul>
        {todos.map((todo) => (
          <Todo
            name={todo.name}
            id={todo.id}
            deleteTask={deleteTask}
            saveTask={saveTask}
            key={todo.id}
          />
        ))}
      </ul>
    </main>
  );
}
