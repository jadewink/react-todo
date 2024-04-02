import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App(item) {
  // const useStorageState = (savedTodoList, initialState) => {

    const [todoList, setTodoList, savedTodoList] = useState([]);
    // localStorage.getItem(savedTodoList) || initialState

    function addTodo(newTodo) {
      setTodoList([...todoList, newTodo])
    }
  
    useEffect(() => {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList, savedTodoList]);
    
    return (
      <>
        <h1>Todo List</h1>
        <AddTodoForm name={item} onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
   
      </>
    )
  }

export default App
