function TaskCreate() {
  return (
    <div className="task-create">
      <h3>Lütfen task giriniz</h3>
      <form className="taskForm">
        <label className="task-label">Başlık</label>
        <input className="task-input"></input>
        <label className="task-label">Task Giriniz</label>
        <textarea className="task-input" rows={5}></textarea>
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
