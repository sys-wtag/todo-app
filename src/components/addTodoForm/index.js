import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodo, isAdding } from "redux/actions"
import "components/addTodoForm/form.scss"
import { customSanitize } from "utils/sanitizeInput"
import { DELETE_BUTTON_ALT, IMAGE_PATHS } from "utils/constants"

function AddTodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (task.trim() === "") {
      setTask("")
      setIsInputFieldEmpty(true)
    } else {
      dispatch(addNewTodo(customSanitize(task.trim())))
      setTask("")
      dispatch(isAdding(false))
    }
  }
  return (
    <form className="todo-form__container" onSubmit={handleSubmit}>
      <textarea
        className="todo-form__container__textarea"
        name="body"
        placeholder="Add Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />

      <div className="todo-form__container__actions">
        <button>Add Task</button>
        <img
          src={IMAGE_PATHS.DELETE}
          alt={DELETE_BUTTON_ALT}
          className="todo-form__container__actions__img"
          onClick={()=>dispatch(isAdding(false))}
        />
        {isInputFieldEmpty && <p> You must add a task </p>}
      </div>
    </form>
  )
}

export default AddTodoForm
