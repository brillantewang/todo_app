import App from './App.js';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './todo_actions'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  removeTodo: todo_idx => dispatch(removeTodo(todo_idx))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
