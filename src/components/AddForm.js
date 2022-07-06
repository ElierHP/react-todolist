import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddForm({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      name: inputValue,
      id: uuidv4(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
}
