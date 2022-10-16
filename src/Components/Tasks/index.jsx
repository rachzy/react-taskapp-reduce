import React from "react";
import "./Tasks.css";

import Task from "../Task";

const Tasks = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
