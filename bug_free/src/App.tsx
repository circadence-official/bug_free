import { useState, useEffect } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {

  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const getTasks = async () => {

      try {
        const taskResponse = await fetch("https://ca4bb038-ee44-49a8-bcdb-2e48a341652e.mock.pstmn.io/task")
        const taskData = await taskResponse.json()
        setTasks(taskData)
      } catch(error) {
        console.log(error)
        // TO DO: save error to state, render different UI to client depending on error state
      }

    }
    getTasks()


  }, [])


  return (
    <>

    <div>
      <h1>Welcome!</h1>

    {showModal && <Modal />}
      <button onClick={() => setShowModal(!showModal)}>Add Tasks</button>
    </div>
      

      <h2>Daily Tasks</h2>
      <ul>
        {tasks.map((task: any) => ( 

          <li key={task.id}>{task.title}</li>

        ))}



      </ul>

    </>
  )
}

export default App
