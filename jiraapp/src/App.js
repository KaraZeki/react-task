import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchMyTasks() {
      const response = await axios.get("http://localhost:3004/tasks");
      setTasks(response.data);
    }

    fetchMyTasks();
  }, []);

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
    const result = await axios.put("http://localhost:3004/tasks/"+task.id, {
      task,
    });
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}></TaskCreate>
      <h1> Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={updateTask}
      ></TaskList>
    </div>
  );
}
export default App;
