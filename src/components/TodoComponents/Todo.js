import React from "react";

const Todo = props => {
  // takes properties from ToDoList -key, item{id, name, completed}, and eventlistener toggleItem
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      // class name is saying it's either `item[if item is completed return 'completed' if not return nothing] i guess the dot is generated anyways
      onClick={() => props.toggleItem(props.item.id)}
      // on click it will pass through the ID of the item ato the toggle Item fucntion
    >
      <p>{props.item.task}</p>
      {/* returns  the task which is taskname*/}
    </div>
  );
};

export default Todo;
