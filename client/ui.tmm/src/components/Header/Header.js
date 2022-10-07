
import style from './Header.module.css';
import { HeaderItems } from './headeritems';
import { auth } from '../context/auth'
const Header = () => {
    const link = [`contact`, `language`]

    return (


        <header className={style['header']}>
            <h1 className={style['logo']}>Hschool</h1>
            {auth.isAuth ? link.map((el, index) => <HeaderItems key={index} name={el} />) : link.map((el, index) => <HeaderItems key={index} name={el} />)}
           
           
            <div className={style['header-buttons']}>
                {/* <div className={style['nightmode']}></div>
                <p className={style['contact']}>contact</p>
                <div className={style['globe-language']}>
                    <div className={style['globe']}></div>
                    <p className={style['language']}>En</p>
                </div> */}



                <div className={style['signup-button']}>
                    <p className={style['sign-text']}>Sign Up</p>
                </div>
                <div className={style['login-button']}>
                    <p className={style['login-text']}>Login</p>
                </div>
            </div>

        </header>
    )
}

export default Header