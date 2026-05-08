
import React from 'react'

function TaskList({tasks, onDelete, onEdit }) {
  return (
    <div>
      {/*This map() displays collected Data to app*/}
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          {task.editing ? (<p>Editing: </p>) : (
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