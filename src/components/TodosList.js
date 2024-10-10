import React, { useState, useEffect } from "react";
import axios from "axios";

// Use the environment variable or fallback to the real API
const todoUrl =
  process.env.REACT_APP_TODO_URL ||
  "https://jsonplaceholder.typicode.com/todos";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(todoUrl)
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching todos: {error}</p>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            {todo.title}
          </li> // Add class "todo"
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
