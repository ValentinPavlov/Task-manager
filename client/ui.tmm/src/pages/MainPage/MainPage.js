import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MainContent from "../../components/MainContent/MainContect"
// import {Routes,Route} from 'react-router-dom'
import style from './MainPage.module.css'
import {Link} from 'react-router-dom'
import ToDo from "../../components/ToDo/ToDo"
import TaskCounter from "../../components/TaskCounter/TaskCounter"
import RegisterBar from "../../components/RegisterBar/RegisterBar"

const MainPage = () => {
    return (


        <div className={style['main-page']}>
            <Header />
            {/* <Link to={'/login'}>login</Link>
            <Link to={'/tasks'}>Tasks</Link> */}
            <MainContent />
        </div>
    )
}

export default MainPage