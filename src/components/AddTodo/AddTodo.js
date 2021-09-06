import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setTasks(event.target.value);
  }

  function handleformSubmit(event) {
    event.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    event.target.userInput.value = "";
  }

  return (
    <form onSubmit={handleformSubmit}>
      <input
        onChange={(event) => handleInputChange(event)}
        type="text"
        name="userInput"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
