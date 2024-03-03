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
  }]

function TodoList() {
    return (
        <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>{item.title}</li>
          );
        })}
      </ul>
);
}

export default TodoList;