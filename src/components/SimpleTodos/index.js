// Write your code here
import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem/index'

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
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="bg">
        <ul className="todoCont">
          <h1 className="head">Simple Todos</h1>
          {todosList.map(eachTodo => (
            <TodoItem
              onDeleteTodo={this.onDeleteTodo}
              todosList={eachTodo}
              key={eachTodo.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
