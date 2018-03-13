import React from 'react';

class SingleTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.props.delete}>X</button>
      </li>
    )
  }
}

export default SingleTodo;
