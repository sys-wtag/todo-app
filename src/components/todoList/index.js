import React from "react"
import { useSelector } from "react-redux"
import TodoItem from "components/todoItem"
import "components/todoList/todoList.css"
import AddTodoForm from "components/addTodoForm"
import add from "assets/undraw_add_files_re_v09g 1.png"
const selectTodos = (state) => state.todos.todoItems

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)

  const renderedListItems = todos
    .slice(0)
    .reverse()
    .map((todo) => {
      return <TodoItem key={todo.text} todo={todo} />
    })
  return (
    <div>
      {todos.length < 1 && toggleIsAdding === false && (
        <div className="add">
          <img src={add} alt="Add First task" className="add__img" />
          <h1>You didn't add any task. Please, add one.</h1>
        </div>
      )}
      <div className="todoList">
        {toggleIsAdding && <AddTodoForm />}
        {renderedListItems}
      </div>
    </div>
  )
}

export default TodoList
