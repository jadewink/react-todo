import { useRef } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


function InputWithLabel({ children, todoTitle, handleTitleChange }) {

    const inputRef = useRef();

    //focus on input field
    useEffect(() => {
        inputRef.current.focus();
        
    });
        
    return (
        <>
            <label htmlFor="todoTitle">{children}&#58;&nbsp;</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} ref={inputRef}></input>&nbsp;
        </>
    );
}

InputWithLabel.propTypes = {
    children: PropTypes.string,
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
}

export default InputWithLabel