import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    inputValue: '',
  }

  onChangeNewTodo = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddTodo = () => {
    const {inputValue} = this.state

    const [title, countStr] = inputValue.split(' ')
    const count = parseInt(countStr, 10)

    if (!Number.isNaN(count) && count > 0) {
      const newTodos = Array.from({length: count}).map(() => ({
        id: uuidv4(),
        title: title.trim(),
        isEditing: false,
        isChecked: false,
      }))

      this.setState(prevState => ({
        todosList: [...prevState.todosList, ...newTodos],
        inputValue: '',
      }))
    } else {
      const newTodo = {
        id: uuidv4(),
        title: inputValue,
        isEditing: false,
        isChecked: false,
      }

      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
        inputValue: '',
      }))
    }
  }

  onUpdateTodo = (id, updatedTodo) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, ...updatedTodo} : todo,
      ),
    }))
  }

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredTodos = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodos})
  }

  renderTodos = () => {
    const {todosList} = this.state

    return (
      <ul className="todosCont">
        {todosList.map(each => (
          <TodoItem
            key={each.id}
            todoDetails={each}
            onUpdateTodo={this.onUpdateTodo}
            onDeleteTodo={this.onDeleteTodo}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="bg">
        <div className="todoListCont">
          <h1 className="head">Simple Todos</h1>
          <div className="inputCont">
            <input
              value={inputValue}
              onChange={this.onChangeNewTodo}
              className="inputBox"
              placeholder="Title..."
              type="text"
            />
            <button type="button" onClick={this.onAddTodo} className="addBtn">
              Add
            </button>
          </div>
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
