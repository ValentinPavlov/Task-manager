import Header from "../../components/Header/Header"
import RegisterBar from "../../components/RegisterBar/RegisterBar"
import style from './RegisterPage.module.css'


const RegisterPage = () => {
    return (


        <div className={style['RegisterPage']}>
            <Header />
            <div className={style['content']}>
                <div className={style['registerBar-wrap']}>
                    <RegisterBar />
                </div>
                <div className={style['right-image']}></div>
            </div>



        </div>
    )
}

export default RegisterPage