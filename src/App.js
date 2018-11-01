import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    error: "",
    userInput: "",
    todos: [],
    done: []
  };

  onChangeHandler = event => {
    this.setState({
      error: "",
      userInput: event.target.value
    });
  };
  //Add item to list
  onClickHandler = event => {
    event.preventDefault();
    if (!this.state.userInput) {
      const error = "enter at least one char";
      this.setState({
        error: error
      });
      return;
    } 
    this.setState({
      error: "",
      userInput: "",
      todos: [this.state.userInput, ...this.state.todos]
    });
  };
  //delete item from list
  deleteTodoHandler = title => {
    const { todos, done } = this.state;
    const index = todos.indexOf(title);
    if (index === -1) {
      const doneIndex = done.indexOf(title);
      done.splice(doneIndex, 1);
      this.setState({
        done: done
      });
    } else {
      todos.splice(index, 1);
      this.setState({
        todos: todos
      });
    }
  };
  checkTodoHandler = title => {
    const { todos, done } = this.state;
    const index = todos.indexOf(title);
    if (index === -1) {
      const doneIndex = done.indexOf(title);
      const todoItem = done[doneIndex];
      done.splice(doneIndex, 1);
      this.setState({
        todos: [...todos, todoItem],
        done: done
      });
    } else {
      const doneItem = todos[index];
      todos.splice(index, 1);
      this.setState({
        done: [doneItem, ...done],
        todos: todos
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Todo List</h1>
            {this.state.error && (
              <div className="alert alert-danger">{this.state.error}</div>
            )}
            <form className="form-inline row alignt-items-center justify-content-around">
              <input
                className="form-control flex-grow-1"
                type="text"
                value={this.state.userInput}
                placeholder="Todo"
                onChange={this.onChangeHandler}
              />
              <button
                className="btn btn-primary flex-grow-0 w-25"
                onClick={this.onClickHandler}
              >
                Add
              </button>
            </form>
            <TodoList
              done={false}
              todos={this.state.todos}
              deleteTodoHandler={this.deleteTodoHandler}
              checkTodoHandler={this.checkTodoHandler}
            />
          </div>
          <div className="col-6">
            <h1>Done List</h1>
            <TodoList
              done={true}
              todos={this.state.done}
              deleteTodoHandler={this.deleteTodoHandler}
              checkTodoHandler={this.checkTodoHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
