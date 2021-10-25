import { useState } from "react"
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Cours unity',
        day: 'lundi',
        reminder: true,
    },
    {
        id: 2,
        text: 'Cours de C#',
        day: 'mardi',
        reminder: true,
    },
    {
        id: 3,
        text: 'Cours de java',
        day: 'mercredi',
        reminder: false,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks ={tasks}></Tasks>
    </div>
  );
}

export default App
