import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


const App=() => {

  const[tasks,setTasks]= useState([
    {
      id:1,
      text:'React Homework',
      day: 'Friday',
      reminder: true,
    },
    {
      id:2,
      text:'Exercise',
      day: 'Tomorrow',
      reminder: true,
    },
    {
      id:3,
      text:'Drink Water',
      day: 'Thursday',
      reminder: false,
    }
    ]
  )
  const deleteTask =(id)=> {
     
    setTasks(tasks.filter(
      (task)=> task.id !==id

    ))
  }
  const toggleReminder =(id)=> {
     
   setTasks(tasks.map((task) => task.id ===id
   ?{...task, reminder:!task.reminder}: task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask/>
      {tasks.length>0?<Tasks tasks={tasks} 
       onDelete={deleteTask} onToggle= {toggleReminder}   />:'No Tasks Available'}

    </div>
    
  );
}

export default App;
