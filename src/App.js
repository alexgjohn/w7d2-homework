import { useState} from 'react'
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy shopping", highPriority: true },
    { id: 2, name: "Clean bathroom", highPriority: false },
    { id: 3, name: "Car's MOT", highPriority: false },
  ])

  const [newTask, setNewTask] = useState("")

  const completeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const listTasks = tasks.map((task) => {
    return(
      <li key={task.id}>
        {task.name}
        <button onClick={() => completeTask(task.id)}>Task Complete?</button>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    if (newTask !== "") {
      const newTaskObj = { id: Date.now(), name: newTask, highPriority: false}
      const nextTasks = [...tasks, newTaskObj]
      setTasks(nextTasks)

      setNewTask("")
    }
  }

  return (
    <div className="App">
      <h1>To-Do List - {tasks.length ? "No Rest For The Wicked!" : "Finally Done!"}</h1>
      <ul>
        {listTasks}
      </ul>
      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add new task: </label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <label htmlFor="high-priority">High Priority?</label>
        <input type="checkbox"></input>
        <input type="submit" value="Save new task"/>
      </form>

    </div>
  );
}

export default App;
