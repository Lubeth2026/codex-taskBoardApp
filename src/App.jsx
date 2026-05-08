
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
//This will route the Data in the app//
     const [tasks, setTasks] = useState([]);
 
function addTask(text, priority){
   const newTask = {
    id: Date.now(), text, priority, editing: false,
   };
  setTasks([...tasks, newTask]);
}
console.log(tasks);

  return (
     <div className='app'>
      <h1>Task Board!</h1>
      <TaskForm onAddTask={addTask}/>
     </div>
  )
}

export default App
