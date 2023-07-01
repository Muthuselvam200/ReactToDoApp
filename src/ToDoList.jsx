import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, toggleToDo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
