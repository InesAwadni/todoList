import React from 'react'

class TodoListItem extends React.Component {

    render() {
        return (
            <div className="row mx-0 my-3  justify-content-between alert alert-secondary">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={this.props.done} 
                    id="check"
                    onChange={(title)=>this.props.checkTodoHandler(this.props.title)} 
                />
                {this.props.title}
                <div onClick={(title)=>this.props.deleteTodoHandler(this.props.title)}>
                    <i className="fas fa-trash-alt"></i>
                </div>
                {/* <div><i class="fas fa-edit  justify-content-end"></i></div> */}
            </div>
        )

    }
}
export default TodoListItem