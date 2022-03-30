import TodoItem from './TodoItem'
import React from 'react'

function TodosList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </ul>
  )
}

export default TodosList