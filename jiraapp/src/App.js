import "./App.css";
import TaskCreate from "./components/TaskCreate";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    //Alttaki kod id ye göre var olan eski taskları alıp üzerine yeni task ekleniyor
    const createdTasks = [
      ...tasks,
      {
        id: Math.random(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];
    setTasks(createdTasks);
  };


  const deleteTaskById = (data) => {
    setTasks((oldValues) => {
      return oldValues.filter((task) => task.id !== data);
    });
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} ></TaskCreate>
      <h1> Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById}></TaskList>
    </div>
  );
}
export default App;
