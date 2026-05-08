
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

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

function deleteTask(id){
  setTasks(tasks.filter((task)=> task.id !== id));
}
//Toggle the Edit task from true/false//
function toggleEdit(id){
  setTasks(tasks.map((task)=> task.id === id ? {...task, editing: true} : task));
}

  return (
     <div className='app'>
      <h1>Task Board!</h1>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={toggleEdit}/>
     </div>
  )
}

export default App
