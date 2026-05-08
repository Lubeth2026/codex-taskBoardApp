
import React from 'react'

function TaskList({tasks, onDelete}) {
  return (
    <div>
       {tasks.map((task)=>(
        <div className="card" key={task.id}>{task.text}
        <button onClick={()=> onDelete(task.id)}>Delete</button>
        </div>
       ))}
    </div>
  )
}

export default TaskList