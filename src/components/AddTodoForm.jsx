import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    //retrieve input value from event object and store in a variable 
    const handleTitleChange = event => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = event => {
        event.preventDefault();

        // Invoke the onAddTodo callback prop and pass object with todoTitle and id as properties
        onAddTodo({ id: Date.now(), title: todoTitle });

        //set state to empty string
        setTodoTitle("");
    };

    return (
        <form className="form" onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} isFocused>Title</InputWithLabel>
            <button>+</button>
        </form>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
}

export default AddTodoForm;