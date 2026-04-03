
import { useState } from "react";
import TaskItem from "./TaskItem";



function Tasklist({tasks,toggleTask,deleteTask}){
    if(tasks.length === 0){
        return <p>no tasks yet</p>
    }

    console.log(tasks);
    

   return(
        <div>
        { tasks.map(function taskfunction(task) {


         return (
         <TaskItem

          key={task.id}
          task = {task}
          toggleTask ={toggleTask}
          deleteTask = {deleteTask}
          />
        );

        } )}


        </div>
)
    
}

export default Tasklist;
