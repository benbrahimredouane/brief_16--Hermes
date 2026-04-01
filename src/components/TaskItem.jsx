

import App from "../App";


function TaskItem({task,toggleTask,deleteTask}){
    return (

        <div>

        <p>{task.title}</p>
        <span>Status : {task.completed ? "Done":"Pending"}</span>
        <button onClick={() => toggleTask(task.id)}> {task.completed ? "Undo":"Complete"}</button>
        <button onClick={() => deleteTask(task.id)}> Delete </button>

         </div>

    );
}
export default TaskItem;