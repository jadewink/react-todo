import TodoListItem from './TodoListItem'

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
  },{
    "id": "4",
    "title": "Pet dog"
  }]

const TodoList = (props) => {
        <ul>
        {props.todoList.map((todo) => {
          <TodoListItem key={todo.id}/>
        })}
      </ul>
}

export default TodoList;