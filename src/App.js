import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Yoyoyoy',
            day: '2022-04-27',
            reminder: true,
        },
        {
            id: 2,
            text: 'Yayayaya',
            day: '2022-05-01',
            reminder: false,
        },
        {
            id: 3,
            text: 'Yeyeyeye',
            day: '2022-04-26',
            reminder: true,
        },
    ])

// Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;

        const newTask = { id, ...task }
        setTasks([...tasks, newTask]);
    }

// Delete TAsk
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

// Toggle Reminder
    const toggleReminder = (id) => {
        console.log(id)
        setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder:!task.reminder} : task ))
    }

  return (
      <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title='Task Tracker' />
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder}/>
          ) : (
              'No Tasks to show'
          )}
    </div>
  );
}

export default App;
