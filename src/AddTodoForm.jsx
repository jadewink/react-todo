function AddTodoForm(props) {

    const handleAddTodo = event => {
        event.preventDefault();

        // retrieve the value of the title element from the event target and store it in a variable named todoTitle
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
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
            <input id="todoTitle" name="title"></input>&nbsp;
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;