import style from './LoginBar.module.css';
import { Link } from 'react-router-dom'
import { postRequest } from '../../hooks/http.hooks'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {auth} from '../context/auth'



const LoginBar = () => {
    const navigate = useNavigate()
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')

    const authUser = async () => {
        try {
            const authReq = await postRequest('http://localhost:5000/api/user/auth', 'POST',
                {
                    email: email,
                    password: password
                })
            if (authReq.userid) {
                auth.isAuth = true
                auth.userid = authReq.userid
                alert(`Welcome back ${authReq.username}`)
                navigate('/tasks', { state: { userid: authReq.userid, username: authReq.username } })
            }
        } catch (error) {
            alert(`error in send request`)
        }
    }

    return (
        <div className={style['LoginBar-wrap']}>
            <p className={style['welcomeText']}>Welcome back!</p>
            <input placeholder="Email" onChange={(event) => setMail(event.target.value)}></input>
            <input placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
            <div className={style['continue-button']} onClick={authUser}>
                <p className={style['continueText']}>Continue</p>
            </div>
        </div>
    )
}

export default LoginBar