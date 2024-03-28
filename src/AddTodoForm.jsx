import { useState } from 'react';

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState("");

    //retrieve input value from event object and store in a variable 
    const handleTitleChange = event => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = event => {
        event.preventDefault();

        // Invoke the onAddTodo callback prop and pass object with todoTitle and id as properties
        onAddTodo({ title: todoTitle, id: Date.now() });

        //set state to empty string
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title&nbsp;</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>&nbsp;
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;