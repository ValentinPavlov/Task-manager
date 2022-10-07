import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header"
import { HeaderItems } from '../../components/Header/headeritems'
import SideMenu from '../../components/SideMenu/SideMenu'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskTable from '../../components/TaskTable/TaskTable'
import ToDo from '../../components/ToDo/ToDo'
import style from './TaskPage.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { postRequest } from '../../hooks/http.hooks'
import { auth } from '../../components/context/auth'


const TaskPage = () => {

    const { state } = useLocation();
    const userid = auth.userid
    const username = state.username
    const [userTasks, setUserTasks] = useState([])
    const checkid = (userid) => {
        console.log(userid)
    }
    const loadUserTasks = async () => {

        try {
            const requestTasks = await postRequest('http://localhost:5000/api/tasks/getall', 'POST',
                {
                    userid: userid
                })
            const parsedTasks = requestTasks.map(el => el.task)
            setUserTasks(parsedTasks)
        }
        catch (error) {
            alert(`cannot get tasks from database: ${error.message}`)
        }
    }

    useEffect(() => {
        loadUserTasks()
    },[]);

    console.log(userTasks);

    return (
        <div className={style['TaskPage']}>
            <div className={style['SideMenu-wrap']}>
                <SideMenu />
            </div>
            <div className={style['header-content']}>
                <h1>HSCHOOL</h1>

                <Header></Header>

                <div className={style['content']}>

                    <div className={style['TaskCounter-wrap']}>
                        <TaskCounter name={username} />
                    </div>


                    <div className={style['ToDo-wrap']}>
                        <ToDo userid={userid} username={username} />
                    </div>

                    <div className={style['TaskTable-wrap']}>
                        <TaskTable userTasks={userTasks} />
                    </div>
                    <div className={style['right-background']}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskPage
