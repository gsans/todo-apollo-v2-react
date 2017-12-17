import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  _filterTodos = todo => {
    let valid = false;
    valid = valid || this.props.filter === 'SHOW_ALL';
    if (!todo.complete) {
      valid = valid || this.props.filter === 'SHOW_ACTIVE';
    } else {
      valid = valid || this.props.filter === 'SHOW_COMPLETED'
    }
    return valid;
  }

  renderTodos () {
    const todos = [...this.props.todos];
    return todos
      .filter(this._filterTodos)
      .reverse()
      .map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={this.props.toggleTodo}
        />
      )
  }

  render () {
    let todos = null;
    if (this.props.todos.length===0) {
      todos = <div className="list message box">Ups! There are no todos yet...</div>
    } else {
      todos = <div className="list">{this.renderTodos()}</div>
    }
    return (
      <div>{todos}</div>
    )
  }
}