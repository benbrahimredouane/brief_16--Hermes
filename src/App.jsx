import { useState } from "react";
import Tasklist from "./components/TaslList";
import TaskInput from "./components/TaskInput";

function App() {

  const [tasks, setTasks] = useState([]);


  const addTask = (title) => {
    const newTask = {
      id : Date.now(),
      title : title,
      completed : false,
      create_at : new Date().toLocaleDateString()
    };

     setTasks([...tasks,newTask]);

  };

  const toggleTask = (id) =>{
    const updatedTasks = tasks.map((task)=>
    task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);

  };

  const deleteTask = (id) =>{
    const filtredTasks = tasks.filter((task)=> task.id !== id);
    setTasks(filtredTasks);

  };

 

  return (

    <>
      <nav>
        <h1>hermes</h1>
      </nav>

      <h1>Dashboard</h1>
      <TaskInput addTask ={addTask}  />
      <Tasklist tasks={tasks} />  
    </>

  );
}
export default App