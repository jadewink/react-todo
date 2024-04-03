import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App(item) {
  // const useStorageState = JSON.parse(localStorage.getItem("savedTodoList"));
  // const useStorageState = ("savedTodoList", initialState) => {
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem("savedTodoList"))
    );

      useEffect(() => {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);  
    // const [todoList, setTodoList] = useState([useStorageState]);

    function addTodo(newTodo) {
      setTodoList([...todoList, newTodo])
    }
  
    return (
      <>
        <h1>Todo List</h1>
        <AddTodoForm name={item} onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
    
      </>
    )
  }

export default App
