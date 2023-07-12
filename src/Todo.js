import React from "react";
import { GoX, GoCheck } from "react-icons/go";
import Button from "./Button";

const Todo = (props) => {
  return (
    <div className=" m-2 flex flex-row items-center justify-between ">
      <div
        style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
        onClick={props.toggleComplete}
      >
        <div className="items-center flex flex-row ">
          <h3 className="text-lg font-bold m-5">{props.todo.text}</h3>
          <div>{props.todo.complete ? <GoCheck /> : ""}</div>
        </div>
      </div>
      <div>
        <Button danger rounded className=" mr-4  " onClick={props.onDelete}>
          <GoX className="mr-1 text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
