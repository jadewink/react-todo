import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App(item) {
  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm name={item} onAddTodo={addTodo} />
      <TodoList todoList={todoList}/>
   
    </>
  )
}

export default App
