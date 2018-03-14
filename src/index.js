import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';

const todosReducer = (state = [], action) => {
  let newTodos;
  switch(action.type) {
    case "ADD_TODO":
      newTodos = state.concat([action.todo]);
      return newTodos;
    case "REMOVE_TODO":
      newTodos = state.slice(0, action.todo_idx).concat(state.slice(action.todo_idx + 1));
      return newTodos;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer
})

let store = createStore(rootReducer);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
