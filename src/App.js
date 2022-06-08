import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
    
  );
}

export default App;
