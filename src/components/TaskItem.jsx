

import React from "react";


function TaskItem({task,toggleTask,deleteTask}){


    return (

        <div className="task-container">

        <p className="task">{task.title}</p>
        <span className="task-status">Status : {task.completed ? "Done":"Pending"}</span>
        <button className="task-toggle" onClick={() => toggleTask(task.id)}> {task.completed ? "Undo":"Complete"}</button>
        <button className="task-delete" onClick={() => deleteTask(task.id)}> Delete </button>

         </div>

    );
}
export default TaskItem;