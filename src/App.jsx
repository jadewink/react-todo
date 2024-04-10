import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


const useSemiPersistentState = () => {
  //check if localStorage is null, if null set state to empty array, if not null set state to existing list
  const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
  const [todoList, setTodoList] = useState(savedTodoList === null ? [] : savedTodoList
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

  //add to do list item
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  
  //remove to do list item
  function removeTodo(item) {
    const newtodoList = todoList.filter((removeItem) => item !== removeItem);
    setTodoList(newtodoList);
  }

  return (
      <>
        <h1>Todo List</h1>
        <AddTodoForm name={item} onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </>
    )
  }

export default App
