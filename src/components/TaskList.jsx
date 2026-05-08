
import React, { useState } from 'react'

function TaskList({tasks, onDelete, onEdit, onUpdate }) {
//Edit the task input newText//
     const [newText, setNewText] = useState("");

  return (
    <div>
      {/*This map() displays collected Data to app*/}
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          {task.editing ? (
            <>
            <input type="text" value={newText} onChange={(event)=> 
          setNewText(event.target.value)}/>
          <button onClick={()=> onUpdate(task.id, newText)}>Save</button>
            </>
          ) : (
            <>
              <p>Description: {task.text}</p> <p>Priority: {task.priority}</p>
              <button onClick={()=> onEdit(task.id)}>Edit</button>
            </>
          )}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList