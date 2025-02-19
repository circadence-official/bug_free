import { useState } from 'react'

function Modal() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [taskTitle, setTaskTitle] = useState('')
    const [category, ] = useState('Daily Task')
    const [description, setDescription] = useState('')
    const [error, setError] = useState("")

    const handleCreateTask = async () => {


        const requestData = {
            method: "POST",
            body: JSON.stringify({

                "id": "10",
                "title": taskTitle,
                "category": category,
                "description": description,
                "startDate": startDate,
                "endDate": endDate,
                "finished": false

            })
        }

        try {
            const createTaskResponse = await fetch("https://ca4bb038-ee44-49a8-bcdb-2e48a341652e.mock.pstmn.io/task", requestData)
            if(createTaskResponse.status === 201) {
                alert("Task created successfully")
            }
        } catch(err) {
            setError("Failed to create task")
            
        }

    }



  return (
    <>

        {error && (
            <h3 style={{color: "red"}}>{error}</h3>
        )}

    <div>

        <label>
        Starts
        <input type='text' name='StartDate' onChange={e => setStartDate(e.target.value)}/>
        </label>
    </div>
    <div>
        <label>
        Ends
        <input type='text' name='EndDate' onChange={e => setEndDate(e.target.value)}/>
        </label>
    </div>
    <div>
        <label>
            Title
            <input type="text" name="Title" onChange={e => setTaskTitle(e.target.value)}/>
        </label>
    </div>      
    <div> 
        <h3>Category</h3>
        <p>Daily Task</p>
    </div>

        
        <label>
            <h3>Description</h3>
            <textarea onChange={e => setDescription(e.target.value)}/>
        </label>

    <div>
        <button onClick={handleCreateTask} style={{margin: '5%'}}>Create Task</button>
    </div>
    </>
  )
}

export default Modal
