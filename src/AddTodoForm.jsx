import { useState } from 'react';

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState();

    //retrieve input value from event object and store in ina variable 
    const handleTitleChange = event => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = event => {
        event.preventDefault();
        event.target.reset();
        
        // Invoke the onAddTodo callback prop and pass todoTitle as an argument
        return (
            <>
                {props.onAddTodo(todoTitle)}
            </>
        );
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