function AddTodoForm(props) {

    const handleAddTodo = event => {
        event.preventDefault();
        console.log(event.target.title.value);
        event.target.reset();
        // retrieve the value of the title element from the event target and store it in a variable named todoTitle
        // let todoTitle;
        // console.log(todoTitle);
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