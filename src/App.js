import React from "react";
import "./App.css";
import UsersList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList />
      </header>
    </div>
  );
}

export default App;
