import React, { useEffect, useReducer } from "react";
import "./App.css";

import Axios from "axios";

import TasksContainer from "./Components/TasksContainer";
import Title from "./Components/Title";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

const ACTIONS = {
  SET_TASKS: "set-tasks",
  ADD_TASK: "add-task",
  TOGGLE_TASK: "toggle-task",
  DELETE_TASK: "delete-task",
};

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case ACTIONS.SET_TASKS: {
      const { tasks } = action.payload;
      return tasks;
    }
    case ACTIONS.ADD_TASK: {
      const { id, title, completed } = action.payload;
      return [
        {
          id: id,
          title: title,
          completed: completed,
        },
        ...tasks,
      ];
    }
    case ACTIONS.TOGGLE_TASK: {
      const { taskId } = action.payload;
      return tasks.map((task) => {
        if (task.id !== taskId) return task;
        return {
          ...task,
          completed: !task.completed,
        };
      });
    }
    case ACTIONS.DELETE_TASK: {
      const { taskId } = action.payload;
      return tasks.filter((task) => task.id !== taskId);
    }
    default:
      throw Error("Invalid action");
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        dispatch({ type: ACTIONS.SET_TASKS, payload: { tasks: data } });
      } catch (err) {
        console.log(err);
        throw Error(
          `An error happened while trying to fetch tasks: ${err.message}`
        );
      }
    };
    fetchTasks();
  }, []);

  const addTask = (taskName) => {
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { id: Date.now(), title: taskName, completed: false },
    });
  };

  const toggleTask = (taskId) => {
    dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: { taskId: taskId },
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: { taskId: taskId },
    });
  };

  return (
    <div className="main-wrapper">
      <TasksContainer>
        <Title>Tasks</Title>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </TasksContainer>
    </div>
  );
};

export default App;
