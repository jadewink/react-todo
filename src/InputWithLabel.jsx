const InputWithLabel = (props) => (
        <>
        <label htmlFor="todoTitle">{props.label}&#58;&nbsp;</label>
            <input id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange}></input>&nbsp;
        </>
    );

export default InputWithLabel