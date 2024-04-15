import { useRef } from 'react';
import { useEffect } from 'react';

function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });
        
    return (
        <>
            <label htmlFor="todoTitle">{props.children}&#58;&nbsp;</label>
            <input id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}></input>&nbsp;
        </>
    );
}
export default InputWithLabel