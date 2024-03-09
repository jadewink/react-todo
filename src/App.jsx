import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const todoList = [{
  "id": "1",
  "title": "Complete Assignment"
},
{
  "id": "2",
  "title": "Read textbook materials",
},
{
  "id": "3",
  "title": "Stretch"
}, {
  "id": "4",
  "title": "Pet dog"
},];

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList todoList={todoList}/>
   
    </>
  )
}

export default App
