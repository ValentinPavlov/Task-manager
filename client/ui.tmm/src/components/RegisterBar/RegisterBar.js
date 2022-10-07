import style from './RegisterBar.module.css';
import { Link } from 'react-router-dom'
import { postRequest } from '../../hooks/http.hooks'
import { useState } from 'react';


const RegisterBar = () => {

    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('')
    const [confpassword, setConfPassword] = useState('')


    const registerUser = async () => {

        try {
            const isValid = (pwd, conpwd) => {
                if (pwd === conpwd) throw new Error('Повторите пароль')
                return true
            }

            const registerRequest = await postRequest('http://localhost:5000/api/user/register', 'POST',
                {
                    name: name,
                    email: email,
                    password: password
                })
        } catch (error) {
            alert(`error in register request`)
        }

    }

    return (
        <div className={style['Register-content']}>


            <div className={style['notice']}>
                <p className={style['quest']}>Already have an account?</p>
                <p className={style['quest-sign']}>Sign in</p>
            </div>

            <div className={style['welcome']}>
                <p className={style['welcome-text']}>Welcome to Hschool</p>
                <p className={style['welcome-desc']}>Join and plan your week with Hschool</p>
            </div>

            <div className={style['register-inputs']}>

                <input className={style['name-input']} onChange={(event)=>setName(event.target.value)} placeholder='name'></input>
                <input className={style['email-input']} onChange={(event)=>setMail(event.target.value)} placeholder='email'></input>
                <input className={style['password-input']} onChange={(event)=>setPassword(event.target.value)} placeholder='password'></input>
                <input className={style['conf-input']} onChange={(event)=>setName(event.target.value)} placeholder='confirm password'></input>

                <div className={style['register-button']} onClick={registerUser}>
                    <Link to={'/tasks'}><p className={style['register-button-text']}>Create an account</p></Link> 
                </div>

            </div>



        </div>
    )
}

export default RegisterBar