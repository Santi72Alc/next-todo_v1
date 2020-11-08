import { useState } from "react";

export const useTasksState = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);

  const modifyTask = (option, id) => {
    switch (option) {
      case "PENDIENT":
        addTask(id);
        break;

      case "DONE":
        doneTask(id);
        break;

      case "CANCEL":
        cancelTask(id);
        break;

      case "DELETE":
        removeTask(id);
        break;

      default:
        break;
    }
  };

  // ADD the task to the state
  const addTask = (newTaskToAdd) => {
    const newTask = {
      creationDate: Date.now(),
      text: newTaskToAdd,
      state: "PENDIENT",
    };
    setTasks([newTask, ...tasks]);
  };

  // mark the task like DONE
  const doneTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.creationDate === id)
        if (task.state === "PENDIENT") task.state = "DONE";
      return task;
    });
    setTasks(newTasks);
  };

  // mark the task like CANCEL
  const cancelTask = (id) => {
    const tasksEdited = tasks.map((task) => {
      if (task.creationDate === id) {
        if (task.state === "PENDIENT") task.state = "CANCEL";
        else task.state = "PENDIENT";
      }
      return task;
    });

    setTasks(tasksEdited);
  };

  // DELETE the task
  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.creationDate !== id);
    setTasks(newTasks);
  };

  return { tasks, modifyTask };
};
