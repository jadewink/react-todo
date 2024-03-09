import TodoListItem from "./TodoListItem";

const todoList = [{
    "id": "1",
    "title": "Complete Assignment"
},
{
    "id": "2",
    "title": "Read textbook materials",
},
{
    "id": "3",
    "title": "Stretch"
}, {
    "id": "4",
    "title": "Pet dog"
},];

const TodoList = (props) => (
    <ul>
        {props.todoList.map((props) => {
              <TodoListItem key={props.todo.id} todoList={todoList} />
        })}
    </ul>
    
);

export default TodoList;