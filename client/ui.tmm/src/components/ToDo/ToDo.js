import style from './ToDo.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../../hooks/http.hooks'

const ToDo =  ({userid, username}) => {

    const navigate = useNavigate()
    const [createTask, setCreateTask] = useState('')
    const [updateNumber, setUpdateNumber] = useState('')
    const [updateTask, setUpdateTask] = useState('')
    const [deleteNumber, setDeleteNumber] = useState('')

   
    const sendTask = async () => {
        try {
            if (createTask.length > 0) {
                const createdTask = await postRequest('http://localhost:5000/api/tasks/create', 'POST',
                    {
                        taskText: createTask,
                        userid: userid
                    })
                    return createdTask
            }
            
        } catch (error) {
            alert(`error in send request: ${error.message}`)
        }
    }



return (
    <div className={style['ToDo-content']}>
        <p className={style['ToDo-head-text']}>To do:</p>

        <div className={style['info-block']}>
            <p>Create:</p>
            <input className={style['create-delete-input']} placeholder='task' onChange={(event) => setCreateTask(event.target.value)}></input>
        </div>

        <div className={style['info-block']}>
            <p>Update:</p>

            <div className={style['update-inputs']}>
                <div className={style['update-number']}>
                    <input className={style['update-input']} placeholder='number' onChange={(event) => setUpdateNumber(event.target.value)}></input>
                </div>
                <div className={style['update-task']}>
                    <input className={style['update-input']} placeholder='task' onChange={(event) => setUpdateTask(event.target.value)}></input>
                </div>
            </div>

        </div>

        <div className={style['info-block']}>
            <p>Delete:</p>
            <input className={style['create-delete-input']} placeholder='number' onChange={(event) => setDeleteNumber(event.target.value)}></input>
        </div>

        <div className={style['save-button']} onClick={sendTask} >
            <p className={style['save-button-text']}>+ save</p>
        </div>


    </div>
)
}

export default ToDo