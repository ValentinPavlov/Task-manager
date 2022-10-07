import style from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={style['main-content']}>
            <div className={style['starttext']}>
                <p className={style['maintext']}>Task Management & To-Do List</p>
                <p className={style['description']}>This productive tool is designed to help you better manage your tas conveniently!</p>
                <div className={style['start-button']} >
                    <p className={style['start-button-text']}> Let’s Start</p>
                </div>
            </div>
            <div className={style['wave-image']}></div>
            <div className={style['backright-image']}></div>

        </div>
    )
}

export default MainContent