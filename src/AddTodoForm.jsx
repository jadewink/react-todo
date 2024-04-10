import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    //retrieve input value from event object and store in a variable 
    const handleTitleChange = event => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    // const isDisabled = (newTodoTitle) => { 
    //     newTodoTitle = ""
    // }

    const handleAddTodo = event => {
        event.preventDefault();

        

        // Invoke the onAddTodo callback prop and pass object with todoTitle and id as properties
        onAddTodo({ id: Date.now(), title: todoTitle });

        //set state to empty string
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} isFocused>Title</InputWithLabel>
            <button>Add</button>
            {/* disabled={this.isDisabled()} */}
        </form>
    );
}

export default AddTodoForm;