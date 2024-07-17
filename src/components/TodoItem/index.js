import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, onUpdateTodo, onDeleteTodo} = props
  const {id, title} = todoDetails

  const [isEditing, setIsEditing] = useState(false)
  const [isChecked, setIsChecked] = useState(todoDetails.isChecked)
  const [inputValue, setInputValue] = useState(title)

  const changeTodoInput = event => {
    setInputValue(event.target.value)
  }

  const editTodo = () => {
    if (isEditing) {
      onUpdateTodo(id, {title: inputValue})
    }
    setIsEditing(!isEditing)
  }

  const clickChecked = () => {
    setIsChecked(!isChecked)
    onUpdateTodo(id, {isChecked: !isChecked})
  }

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  const classLine = isChecked ? 'paraLine' : ''

  return (
    <li className="todo">
      <input
        id={id}
        onChange={clickChecked}
        type="checkbox"
        checked={isChecked}
      />
      {isEditing ? (
        <input
          value={inputValue}
          onChange={changeTodoInput}
          className="inputBox"
          placeholder="Title..."
          type="text"
        />
      ) : (
        <label htmlFor={id}>
          <p className={`para ${classLine}`}>{title}</p>
        </label>
      )}

      <button type="button" onClick={editTodo} className="editBtn">
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button type="button" onClick={deleteTodo} className="deleteBtn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
