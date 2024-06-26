import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {

    const handleRemoveItem = () => {
        onRemoveTodo(todo);
        };

        return (
            <>
                <li key={todo.id}>
                    <span className={styles.left}>{todo.title}</span>
                    <span className={styles.right}><button type="button" onClick={handleRemoveItem} text="Remove">-</button></span>
                </li>
            </>
        )
}; 
  
TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
}
export default TodoListItem
