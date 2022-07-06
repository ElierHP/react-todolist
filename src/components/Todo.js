import React, { useState } from "react";

export default function Todo({ name, id, deleteTask, saveTask }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  return (
    <li key={id}>
      {!editing ? (
        `${name}`
      ) : (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      <button onClick={() => setEditing(!editing)}>
        {!editing ? "Edit" : "Cancel"}
      </button>

      {!editing ? (
        <button onClick={() => deleteTask(id)}>Delete</button>
      ) : (
        <button onClick={() => saveTask(id, inputValue, setEditing)}>
          Save
        </button>
      )}
    </li>
  );
}
