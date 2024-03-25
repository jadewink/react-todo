import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App(item) {
  const [newTodo, setnewTodo] = useState(0);
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm name={item} onAddTodo={setnewTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={todoList}/>
   
    </>
  )
}

export default App
