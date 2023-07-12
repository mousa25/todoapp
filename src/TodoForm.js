import React, { useState } from "react";
import shortid from "shortid";
import { GoPencil } from "react-icons/go";
import Button from "./Button";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complet: false,
    });
    setText("");
  };
  return (
    <form>
      <div className=" flex flex-row items-center justify-center ">
        <input
          type="text"
          placeholder="enter your task to do"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button primary rounded className="mt-5 p-3" onClick={handleSubmit}>
          <GoPencil className="mr-4" />
          Add ToDo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
