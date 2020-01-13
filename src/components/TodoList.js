import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./ToDos";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "item",
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };


  render() {
    let todos = [];
if (this.state.todoToShow === "item") {
      todos = this.state.todos;
     }

    return (
      <div>
        <h1>To Do List</h1>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
    <div>
          <button
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo
                  })),
                }))
              }
            >
            </button>
          </div>
        </div>
      );
    }
  }
               