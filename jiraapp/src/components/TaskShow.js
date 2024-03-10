import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDetele = () => {
    onDelete(task.id);
  };
  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };

  const updateTask = (taks) => {
    onUpdate(taks)
  };
  return (
    <div className="tasDiv">
      {showEdit ? (
        <TaskCreate onUpdate={updateTask} task={task}  taskFormUpdate={true} ></TaskCreate>
      ) : (
        <div>
          <h3>Görevleriniz </h3>
          <p>{task.title} </p>
          <h3>Yapılacaklar </h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="button-delete" onClick={handleDetele}>
              Sil
            </button>
            <button className="button-update" onClick={handleUpdate}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
