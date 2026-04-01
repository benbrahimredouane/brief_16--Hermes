import { useState } from "react";

function TaskInput({ addTask }) {

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (title.trim() === "") return;


    addTask(title);

    setTitle("");

  };

 


  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add task ...."
      />

      <button >Add</button>
      
    </form>
  );
}

export default TaskInput;
