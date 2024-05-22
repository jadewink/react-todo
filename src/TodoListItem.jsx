import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {

    const handleRemoveItem = () => {
        onRemoveTodo(todo);
        };

        return (
            <>
                <li key={todo.id}>
                    <span className={styles.left}>{todo.title}</span>
                    <span className={styles.right}><button type="button" onClick={handleRemoveItem}>-</button></span>
                </li>
            </>
        )
}; 
  
export default TodoListItem
