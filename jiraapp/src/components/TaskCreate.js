import { useState } from "react";
function TaskCreate({ onCreate, task, taskFormUpdate }) {
  /***** Update ******/
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
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
  const [titleUpdate, setTitleUpdate] = useState(
    !taskFormUpdate ? "" : task.title
  );
  const [taskDescUpdate, setTaskDescUpdate] = useState(
    !taskFormUpdate ? "" : task.taskDesc
  );
  const handleUpdateChange = (event) => {
    setTitleUpdate(event.target.value);
  };
  const handleTaskUpdateChange = (event) => {
    setTaskDescUpdate(event.target.value);
  };
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    onCreate(titleUpdate, taskDescUpdate, taskFormUpdate);
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
              value={titleUpdate}
              onChange={handleUpdateChange}
              className="task-input-update"
            ></input>
            <label className="task-label-update">Task Giriniz</label>
            <textarea
              value={taskDescUpdate}
              onChange={handleTaskUpdateChange}
              className="task-input-update"
              rows={3}
            ></textarea>

            <div className='button-update-group'>
              <button
                onClick={handleUpdateCancel}
                className="btn-edit-cancel"
              >
                İptal
              </button>
              <button
                onClick={handleUpdateSubmit}
                className="btn-edit-save"
              >
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
