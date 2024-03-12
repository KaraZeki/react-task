import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    await axios.post("http://localhost:3004/tasks", {
      title: title,
      taskDesc: taskDesc,
    });
    const taskLists = await axios.get("http://localhost:3004/tasks");
    setTasks(taskLists.data);
  };

  const deleteTaskById = async (data) => {
    await axios.delete("http://localhost:3004/tasks/" + data);
    const taskLists = await axios.get("http://localhost:3004/tasks");
    setTasks(taskLists.data);
  };

  const updateTask = async (task) => {
    debugger;
    var result = await fetch(`http://localhost:3004/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (result.status == 200) {
      window.location.reload();
    }
  };

  async function fetchMyTasks() {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  }
  const sharedValuesAndMethods = {
    tasks,
    fetchMyTasks,
    createTask,
    updateTask,
    deleteTaskById,
  };
  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
