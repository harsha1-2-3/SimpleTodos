// Write your code here

const Todoitem = props => {
  const {todosList, onDeleteTodo} = props
  const {title, id} = todosList
  const deleteTodo = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo">
      <p className="para">{title}</p>
      <button onClick={deleteTodo} className="btn">
        Delete
      </button>
    </li>
  )
}

export default Todoitem
