
import React, { useState } from 'react'

function TaskForm({onAddTask}) {
      const [taskText, setTaskText] = useState("");
      const [taskPriority, setTaskPriority] = useState("Low");

function handleSubmit(event){
    event.preventDefault();
    onAddTask(taskText, taskPriority);
    setTaskText("");
    setTaskPriority("Low");
}

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your task here..." value={taskText} onChange={(event)=> setTaskText(event.target.value)}/>
        <select value={taskPriority} onChange={(event)=> setTaskPriority(event.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        <button>Add</button>
       </form>
    </div>
  )
}

export default TaskForm