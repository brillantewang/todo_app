import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './SingleTodo.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentTodo: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete(i) {
    return () => {
      let newTodos = this.state.todos.slice(0, i).concat(this.state.todos.slice(i + 1));
      this.setState({ todos: newTodos })
    }
  }

  handleClick() {
    let newTodos = this.state.todos.concat([this.state.currentTodo]);
    this.setState({
      todos: newTodos,
      currentTodo: ""
    });
  }

  handleChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  render() {
    let todoItems = this.state.todos.map((todo, i) => {
      return <SingleTodo key={i} todo={todo} delete={this.handleDelete(i)}/>
    })

    return (
      <div>
        <input
          placeholder="Enter todo"
          value={this.state.currentTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add!</button>
        <br/>
        {todoItems}
      </div>
    );
  }
}

export default App;
