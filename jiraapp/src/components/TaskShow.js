import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDetele = () => {
    onDelete(task.id);
  };
  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };

  const updateTask = (titleUpdate, taskDescUpdate) => {
    task.title=titleUpdate;
    task.taskDesc=taskDescUpdate;
    setShowEdit(!showEdit)
  };
  return (
    <div className="tasDiv">
      {showEdit ? (
        <TaskCreate onCreate={updateTask} task={task}  taskFormUpdate={true} ></TaskCreate>
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
