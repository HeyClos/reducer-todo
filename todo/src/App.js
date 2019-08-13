import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// ON HOLD:
// Step 2:
// Using the reducer hook, set up state in your component(WHICH COMPONENT?). 
// Think about what you'll need in order to use the reducer hook(NEED_ACTIONS)
// and think about what it returns.(...state, and a change to a property)
// Now render your list of todos from your reducer in your app.


// STEP 3 - Adding todos
// Build a form to add todos to your list 
// ---(go to TodoForm component, make form with onClickButton)
// Build a function that will dispatch an action to add a new todo
// ---(go to TodoForm, )

// STEP 5 - Toggle the completed field
// Build a function that will dispatch an action to toggle a todo's completed field
// ---(Will it live in reducer.js or TodoForm.js?)
// Invoke this new function when you click on a todo
// ---(add onClick in todoForm.js)
// Style your todo to somehow show that it is completed (be creative here!)
// ---(add small CSS App.css, text: red)
// Write the case in your reducer for toggling the completed property
// ---(in reducer.js, add 'TOGGLE_TODO')

// STEP 6 - Clearing completed todos
// Build a function that will dispatch an action to filter out any completed todos
// ---(in todoForm.js, const clearTodos = ... )
// Invoke this new function when you click on a "Clear completed" button
// (in todoForm.js, add onClick={clearTodos} to "Clear Completed" button )
// Write the case in your reducer for filtering completed todos
// ---(in reducer.js, add 'CLEAR_TODO')


const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleTodo = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
           }
          } else {
            return todo;
        }
      })
    })
  };
  
  // NAMING CONVENTION NOTE: todo is an object holding 3 properties. Not to be 
  // confused with task, which is the name of the task within the todo object.

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  clearTodo = () => {
    this.setState ({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo} 
          clearTodo={this.clearTodo}
        />
        <TodoForm 
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          addTodo={this.addTodo} 
        />
        {this.state.task}
      </div>
    );
  }
}

export default App;