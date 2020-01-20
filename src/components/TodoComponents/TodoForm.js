import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
    // set state where task is an empty variable
  }

  //when there is a change to in the the input with the name = "task" and set it to the current event target value and set that state of TODOFORM
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //when you submit prevent the page from refreshing, use addTask handler passing through task name. this function will add a new item and set that item back into the SET STATE OF THE APP, then will SET THE STATE OF TODOFORM task back to empty
  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input type='text' value={this.state.task} name='task' onChange={this.handleChanges} />
        {/* input that is a text type, with the name task - the value is the CURRENT STATE OF TODOFORM and then when it changes it will go through handleChanges */}
        <button>Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
        {/* button on click will take clear completed function*/}
      </form>
    );
  }
}

export default TodoForm;
