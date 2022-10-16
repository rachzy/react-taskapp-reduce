import React from "react";
import "./Task.css";

import { FaTimes } from "react-icons/fa";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div
      className="task"
      onClick={toggleTask.bind(this, task.id)}
      style={task.completed ? { borderLeft: "5px solid chartreuse" } : {}}
    >
      <p>{task.title}</p>
      <FaTimes onClick={deleteTask.bind(this, task.id)} size={18} />
    </div>
  );
};

export default Task;
