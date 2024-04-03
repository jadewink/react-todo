import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); 

  return [todoList, setTodoList]
};

function App(item) {
  const [todoList, setTodoList] = useSemiPersistentState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );

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
