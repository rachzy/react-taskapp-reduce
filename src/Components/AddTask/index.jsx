import React, { useRef } from "react";
import "./AddTask.css";

import Button from "../Button";

const AddTask = ({ addTask }) => {
  const taskInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput.current.value);
  };

  return (
    <div className="add-task-container">
      <form onSubmit={onSubmit}>
        <input
          ref={taskInput}
          className="add-task"
          placeholder="Task name..."
        />
        <Button type={"submit"}>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
