import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './components/TodoListItem.module.css';
      
function App(item) {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("ascending");

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title`
  // &sort[0][direction]=asc
  useEffect(() => {
    loadTodos();
  }, [sortType]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); 

  const loadTodos = async () => {
    try {
      const response = await
        fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
            }
        });
     
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      //get array of todos from API, save it to dataResponse
      const dataResponse = await response.json();
    
      //map todos from API to same schema as existing todos
      const todos = dataResponse.records.map((todo) => {
       
        const newTodo =  {
            id: todo.id,
            title: todo.fields.title
        }

        return newTodo

      });

      sortToDos(todos);
      setIsLoading(false);
    }

    catch (error) {
      console.log(error.message);
      return null;
    }
  };

  function sortToDos(todos) {
    //create blank variable to hold sorted data
    let sortedData;

    // = todos;
    // console.log("sorttype", sortType);

    //if ascending is selected from drop down, sort list in ascending alphabetical order
    if (sortType === "ascending") {
      sortedData = todos.sort((objectA, objectB) => {
        if (objectA.title < objectB.title) {
          return -1;
        }
        else if (objectA.title > objectB.title) {
          return 1;
        }
        else return 0;
      });
      // console.log("in the asc if block");
      // sortedData = todos.sort((a, b) => {
      //   if (a.title < b.title) {
      //     return -1;
      //   }
      //   if (a.title > b.title) {
      //     return 1;
      //   }
      //   return 0;
      // });
      
      // console.log(todos);
      // Output: [ { title: 'Apple' }, { title: 'Banana' }, { title: 'Cherry' }, { title: 'Date' } ]
        
      // sortedData = todos.sort((objectA, objectB) => 1);
      // console.log("sorteddataascifblock", sortedData);
    }
    
    //if descending is selected from drop down, sort list in descending alphabetical order
    if (sortType === "descending") {
      sortedData = todos.sort((objectA, objectB) => {
        if (objectA.title < objectB.title) {
          return 1;
        }
        else if (objectA.title > objectB.title) {
          return -1;
        }
        else return 0;
      });
        // console.log("todo" , todos);
        // console.log("sorted" , sortedData);
      // });
    }
    // console.log("outofifsorted", sortedData);
    setTodoList(sortedData);
    }

  function addTodo(newTodo) {
    // check if blank
    if (newTodo.title != "") { // <- check here
      
      //add to do list item
      const postTodo = async (newTodo) => {
        try {
          const airtableData = {
            fields: {
              title: newTodo.title,
            },
          }

          const response = await fetch(url,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
              },
              body: JSON.stringify(airtableData),
            }
          );

          if (!response.ok) {
            const message = `Error:${response.status}`;
            throw new Error(message);
          }
          
          const dataResponse = await response.json();
          
          return dataResponse;
          
        } catch (error) {
          console.log(error.message);
          return null;
        }
      }
      postTodo(newTodo);
      // console.log("todolist", [newTodo, ...todoList]);
      // let sortedTodos = sortToDos([newTodo, ...todoList]);
      // console.log("sorted with new", sortedTodos);
      // setTodoList(sortedTodos);
      sortToDos([newTodo, ...todoList]);
      
    }
  }

  function removeTodo(item) {
    //remove to do list item
    const newtodoList = todoList.filter((removeItem) => item !== removeItem);
    setTodoList(newtodoList);
  }
    
  return ( 
      <BrowserRouter>
        <Routes>
        <Route path="/" element={
            <>
              {/* Conditionally display "loading..." indicator. If the to do list is loading, show "Loading..."
              Once the to do list becomes visible, hide the loading indicator. */}
            <h1>TO DO LIST</h1>
            <span className={styles.center}>
              <AddTodoForm name={item} onAddTodo={addTodo} />
                <br />
                <div className="wrapper__sort-buttons">
                  <select
                    defaultValue="default"
                    onChange={(e) => setSortType(e.target.value)}
                   >
                    <option disabled value="default">
                    Sort by
                    </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
                  {isLoading === true ? (
                      <p>Loading...</p>
              ) : <TodoList todoList={todoList} onRemoveTodo={removeTodo}
              />}
            </span>
            </>
          } />
        <Route path="/new" element={ 
          <h1>New Todo List</h1>
        } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
