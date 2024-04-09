const InputWithLabel = (props) => (
        <>
            <label htmlFor="todoTitle">Title&nbsp;</label>
            <input id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange}></input>&nbsp;
        </>
    );

export default InputWithLabel