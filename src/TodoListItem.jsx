const TodoListItem = ({ todo, onRemoveTodo }) => {

    const handleRemoveItem = () => {
        onRemoveTodo(todo);
        };

        return (
            <>
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <span>&nbsp;<button type="button" onClick={handleRemoveItem}>Remove</button></span>
                </li>
            </>
        )
};
  
export default TodoListItem
