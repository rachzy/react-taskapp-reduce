import React from "react";
import "./TasksContainer.css";

const TasksContainer = ({ children }) => {
  return <div className="tasks-container">{children}</div>;
};

export default TasksContainer;
