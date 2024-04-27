import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App(item) {

  //check if localStorage is null, if null set state to empty array, if not null set state to existing list
  // const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
  // const [todoList, setTodoList] = useState(savedTodoList === null ? [] : {savedTodoList});
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // setIsLoading(true);
    let todoList = JSON.parse(localStorage.getItem("savedTodoList"));
    
    new Promise((resolve, reject) =>
      setTimeout(
        () => resolve({ data: { todoList } }),
        2000
      ))

      // Inside the function, use your state setter to update the list and pass the todoList from your result object
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
      // console.log(todoList);
    }
  }, [todoList]); 

  function addTodo(newTodo) {
    //add to do list item
    setTodoList([...todoList, newTodo])
  }
  
  function removeTodo(item) {
    //remove to do list item
    const newtodoList = todoList.filter((removeItem) => item !== removeItem);
    setTodoList(newtodoList);
  }

    return ( 
      <>
        
        <h1>Todo List</h1>
        <AddTodoForm name={item} onAddTodo={addTodo} />
        {isLoading === true ? (
        <p>Loading...</p>
        ) : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
        
      </>

      
    )
    // return (
    //   <div>
    //   ...
    //   <hr />
    //   {isLoading ? (
    //   <p>Loading...</p>
    //   ) : (
    //     <>
    //       <h1>Todo List</h1>
    //       <AddTodoForm name={item} onAddTodo={addTodo} />
    //       <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    //     </>
    //   )}
    //   </div>
    // )
  }

export default App

