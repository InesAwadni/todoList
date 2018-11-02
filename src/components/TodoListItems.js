import React from "react";

class TodoListItem extends React.Component {
  render() {
    return (
      <div className="row mx-3 my-3  justify-content-between alert alert-secondary">
        <div className="row m-0 p-0 align-items-center">
          <input
            className="ml-1 mr-2"
            type="checkbox"
            checked={this.props.done}
            id="check"
            onChange={title => this.props.checkTodoHandler(this.props.title)}
          />
          <p className="mb-0">{this.props.title}</p>
        </div>
        <div onClick={title => this.props.deleteTodoHandler(this.props.title)}>
          <i className="fas fa-trash-alt text-primary" />
        </div>
        {/* <div><i class="fas fa-edit  justify-content-end"></i></div> */}
      </div>
    );
  }
}
export default TodoListItem;
