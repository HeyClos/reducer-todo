import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo 
          todo={todo}
          key={todo.id} 
          toggleTodo={props.toggleTodo} 
        />
      ))}
      <button className="clear-btn" onClick={props.clearTodo}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;