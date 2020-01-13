import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    count: 0
  };


  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;