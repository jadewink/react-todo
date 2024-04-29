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
    
  const loadTodos = async() => {
    try {
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

      const response = await
        fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
            }
        });

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        // const message = `Error`;
        throw new Error(message);
      }
      //get array of todos from API, save it to dataResponse
      const dataResponse = await response.json();
      // console.log(dataResponse);

      //map todos from API to same schema as existing todos
      const todos = dataResponse.records.map((todo) => {

        const newTodo =  {
            id: todo.id,
            title: todo.fields.title
        }

        return newTodo

      });

      // console.log(todos);
      setTodoList(todos);
      setIsLoading(false);
    }

    catch (error) {
      console.log(error.message);
      return null;
    }
  };
    
  loadTodos();

  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
      // console.log(todoList);
    }
  }, [todoList, isLoading]); 

  function addTodo(newTodo) {
    //add to do list item
    const postTodo = async (todo) => {
      try {
        const airtableData = {
          fields: {
            title: todo,
          },
        };
    
        const response = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            },
            body: JSON.stringify(airtableData),
          }
        );
    
        if (!response.ok) {
          const message = `Error has ocurred:
                                 ${response.status}`;
          throw new Error(message);
        }
    
        const dataResponse = await response.json();
        return dataResponse;

      } catch (error) {
          console.log(error.message);
        return null;
      }
    };
    
    postTodo();
    setTodoList([...todoList, newTodo])
  }
  
  function removeTodo(item) {
    //remove to do list item
    const newtodoList = todoList.filter((removeItem) => item !== removeItem);
    setTodoList(newtodoList);
  }

    return ( 
      <>
        {/* Conditionally display "loading..." indicator. If the to do list is loading, show "Loading..." 
        Once the to do list becomes visible, hide the loading indicator. */}
        <h1>Todo List</h1>
        <AddTodoForm name={item} onAddTodo={addTodo} />
        {isLoading === true ? (
        <p>Loading...</p>
        ) : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
        
      </>
    )
  }

export default App

