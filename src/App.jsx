import { useState } from "react";
import Tasklist from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Filter from "./components/Filter";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks-list',[]);
  const [filter, setFilter] = useState('all')

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
      create_at: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, newTask]);
    
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filtredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filtredTasks);
  };

    const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed === true
    if (filter === 'pending') return task.completed === false
    return true 
  })

  return (
    <>
      <nav>
        <h1>hermes</h1>
      </nav>

      <h1>Tasks</h1>
      <TaskInput addTask={addTask} />

        <Filter 
          filter={filter} 
          setFilter={setFilter}
        />


      <Tasklist tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}  />
    </>
  );
}
export default App;
