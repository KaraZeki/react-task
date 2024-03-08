function TaskShow({ task }) {
  console.log(task);
  return (
    <div className="tasDiv"> 
      <h3>Görevleriniz </h3>
      <p>{task.title} </p>
      <h3>Yapılacaklar </h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className='button-delete'>Sil</button>
        <button className="button-update">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
