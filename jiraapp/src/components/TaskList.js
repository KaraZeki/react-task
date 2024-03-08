import TaskShow from "./TaskShow";

function TaskList({tasks}) {
  return <div className='task-list'>
  {tasks.map((task)=>{
    return <TaskShow key={task.id} task={task}></TaskShow>
  })}
  </div>;
}

export default TaskList;
