import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './SingleTodo.js';
import { Provider } from 'react-redux';
import App from './app_container.js';

const Root = props => (
  <Provider store={props.store}>
    <App/>
  </Provider>
)

export default Root;
