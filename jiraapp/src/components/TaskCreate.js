import { useState } from "react";
function TaskCreate({ onCreate, onUpdate, task, taskFormUpdate }) {
 
  /***** Update ******/
  const [title, setTitle] = useState(!taskFormUpdate ? "" : task.title);
  const [taskDesc, setTaskDesc] = useState(
    !taskFormUpdate ? "" : task.taskDesc
  );
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  /***** Update ******/
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    onUpdate(task);
  };

  const handleUpdateCancel = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen task giriniz</h3>
          <form className="task-form-update">
            <label className="task-label-update">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input-update"
            ></input>
            <label className="task-label-update">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input-update"
              rows={3}
            ></textarea>

            <div className="button-update-group">
              <button onClick={handleUpdateCancel} className="btn-edit-cancel">
                İptal
              </button>
              <button onClick={handleUpdateSubmit} className="btn-edit-save">
                Düzenle
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen task giriniz</h3>
          <form className="taskForm">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            ></input>
            <label className="task-label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            ></textarea>
            <button onClick={handleSubmit} className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
