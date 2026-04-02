
import { useState } from "react";
import TaskItem from "./TaskItem";



function Tasklist({tasks,toggleTask,deleteTask}){
    if(tasks.length === 0){
        return <p>no tasks added yet</p>
    }
    

    return (
        <div>
        { tasks.map((task) => (


          <TaskItem
          key={task.id}
          task = {task}
          toggleTask ={toggleTask}
          deleteTask = {deleteTask}
          />

        ))}


        </div>

    );
}

export default Tasklist;
