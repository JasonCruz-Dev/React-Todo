import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

//Import React components and styling

const todoData = [];

//Create empty data set for Todolist to manipulate to create the mapped Todo Component

class App extends React.Component {
  //extends react.component gives all the props needed to render and have class functions in react
  constructor() {
    super();
    // this is drop all the props from React Components so we can use methods like states and properties from other states, to bind properties that utilizes this inside of it - if none of those aren't needed no need to put them in
    this.state = {
      todos: todoData
      // this is setting todos to todoData array that was stated before outside of the project
    };
  }

  //===============EVENT HANDLER FUNCTIONS ====================\\

  //this handler toggles the completed property item to be true or false
  toggleItem = id => {
    //takes grabs ID info from event
    this.setState({
      todos: this.state.todos.map(item => {
        //for each item in the current list state
        if (item.id === id) {
          // if the ID is same of the ID gathered
          return {
            ...item,
            completed: !item.completed
            // then return the item with all it's property except have completed
          };
        } else {
          // else just return the same item
          return item;
        }
      })
    });
  };

  //this handler uses the value and creates a task in this format then sets todos to the current list and then the new task at the end of the list.
  addTask = taskName => {
    // takes task Name info from event
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    // Creates a new item with all needed property
    this.setState({
      todos: [...this.state.todos, newTask]
    });
    // sets the state of todos to update the current list all items plus the new item
  };

  // this handler sets the new state of ToDo to a new array given by filter which checks each items in the previous state to find it's completed or not completed
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };
  //render is a method that helps return the jsx
  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        {/* Render ToDo List while passing the TODO list with the ITEMs as well as teh Toggle Handler to the component*/}

        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        {/* Render ToDo form List while passing the addtaske and clear completed to the component*/}
      </div>
    );
  }
}

export default App;
