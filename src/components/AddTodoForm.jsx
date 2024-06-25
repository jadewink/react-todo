import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const navigate = useNavigate();
    // const handleClick = () => navigate('/');

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
        navigate('/');
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