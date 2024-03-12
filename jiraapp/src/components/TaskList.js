import { useContext } from "react";
import TaskContext from "../context/task";
import TaskShow from "./TaskShow";

function TaskList( ) {

  const {tasks}=useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <TaskShow key={task.id} task={task}></TaskShow>
        );
      })}
    </div>
  );
}

export default TaskList;
