import "./App.css";
import { GoListUnordered, GoCheck, GoTrash } from "react-icons/go";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Button from "./Button";
import Todo from "./Todo";

function App() {
  let [todos, setTods] = useState([]);
  const [todoToShow, setTodToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  const addTodo = (todo) => {
    setTods([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTods(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoToShow = (s) => {
    setTodToShow(s);
  };
  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }

  const removeAllTodosthatareComplete = () => {
    setTods(todos.filter((todo) => !todo.complete));
  };
  const toggleComplete = (id) => {
    setTods(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <div className=" justify-between items-center m-3">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => handleDelete(todo.id)}
              toggleComplete={() => toggleComplete(todo.id)}
              className="flex flex-row items-center justify-center"
            />
          );
        })}
        <div className="flex flex-row items-center justify-center p-3 m-3">
          <Button
            primary
            rounded
            className="p-3 m-3"
            onClick={() => updateTodoToShow("all")}
          >
            <GoListUnordered className="mr-4 text-lg" /> All
          </Button>
          <Button
            primary
            rounded
            className="border-zinc-50 p-3 m-3"
            onClick={() => updateTodoToShow("active")}
          >
            Active
          </Button>
          <Button rounded primary onClick={() => updateTodoToShow("complete")}>
            {" "}
            <GoCheck className="m-3 text-lg" />
            Complete{" "}
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center  m-3">
          <Button
            success
            rounded
            onClick={(todo) => {
              setTods(
                todos.map((todo) => ({
                  ...todo,
                  complete: toggleAllComplete,
                }))
              );
              setToggleAllComplete(!toggleAllComplete);
            }}
            className="m-3"
          >
            Toggle all complete : {`${toggleAllComplete}`}
          </Button>
          {todos.some((todo) => todo.complete) ? (
            <Button
              danger
              rounded
              className="m-3"
              onClick={removeAllTodosthatareComplete}
            >
              Remove all complete todos
              <GoTrash className="m-2 text-lg" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
