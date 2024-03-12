import { useContext, useState } from "react";
import TaskCreate from "./TaskCreate";
import TaskContext from "../context/task";

function TaskShow({ task}) {

  const {deleteTaskById}=useContext(TaskContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDetele = () => {
    deleteTaskById(task.id);
  };
  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };


  return (
    <div className="tasDiv">
      {showEdit ? (
        <TaskCreate task={task}  taskFormUpdate={true}></TaskCreate>
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
