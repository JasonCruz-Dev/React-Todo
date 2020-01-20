import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  // Takes the props give by APPs which is the todo state and the toggle item handler
  return (
    <div>
      {props.todos.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      {/* calls todo state and maps the current list through a function to render Todo component where it passes the props from apps through the parameter */}
    </div>
  );
};

export default TodoList;
