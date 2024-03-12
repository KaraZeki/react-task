import { useEffect,useContext } from "react";
import "./App.css";
import TaskContext  from "./context/task";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList"

function App() {

  const {fetchMyTasks}=useContext(TaskContext);
  useEffect(() => {
    fetchMyTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate></TaskCreate>
      <h1> Görevler</h1>
      <TaskList></TaskList>
    </div>
  );
}
export default App;
