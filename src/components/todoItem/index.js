import React from "react"
import PropTypes from "prop-types"
import "components/todoItem/todoItem.scss"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"

function TodoItem({ todo }) {
  return (
    <div className="item_card">
      <h2>{todo.text}</h2>
      <div className="item_card__bottom">
        <p className="item_card__time"> Created At : {todo.createdAt}</p>
        <div className="item_card__actions">
          <img
            src={IMAGE_PATHS.CHECK}
            alt={COMPLETE_BUTTON_ALT}
            className="item_card__actions__img"
          />
          <img
            src={IMAGE_PATHS.EDIT}
            alt={EDIT_BUTTON_ALT}
            className="item_card__actions__img"
          />
          <img
            src={IMAGE_PATHS.DELETE}
            alt={DELETE_BUTTON_ALT}
            className="item_card__actions__img"
          />
        </div>
      </div>
    </div>
  )
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
