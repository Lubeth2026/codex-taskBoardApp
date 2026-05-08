
import React from 'react'

function TaskList({tasks}) {
  return (
    <div>
       {tasks.map((task)=>(
        <div className="card" key={task.id}>{task.text}</div>
       ))}
    </div>
  )
}

export default TaskList