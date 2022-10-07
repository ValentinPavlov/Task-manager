import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MainContent from "../../components/MainContent/MainContect"
// import {Routes,Route} from 'react-router-dom'
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'
import LoginBar from "../../components/LoginBar/LoginBar"
const LoginPage = () => {
    return (


        <div className={style['LoginPage']}>
      <h1>HSCHOOL</h1>
            


            <div className={style['content']}>

                <LoginBar />

                <div className={style['Background']}>

                </div>

            </div>

        </div>
    )
}

export default LoginPage