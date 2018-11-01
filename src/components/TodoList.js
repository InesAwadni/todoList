import React from "react";
import TodoListItem from "./TodoListItems";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, key) => {
          return (
            <TodoListItem
              done={this.props.done}
              title={todo}
              key={key}
              deleteTodoHandler={this.props.deleteTodoHandler}
              checkTodoHandler={this.props.checkTodoHandler}
            />
          );
        })}
      </div>
    );
  }
}
export default TodoList;
