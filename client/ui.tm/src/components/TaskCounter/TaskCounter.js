import style from './TaskCounter.module.css';

const TaskCounter = ({name}) => {
    return (
        <div className={style['taskCounter-content']}>
            <p className={style['taskmanager-text']}>Tasks Manager</p>
            <p className={style['taskmanager-description']}>Hello {name}! Add new tasks  with task manager from Hschool</p>
            <div className={style['taskCounter-block']}>
                <div className={style['taskCounter-date-count']}>
                    <div className={style['taskCounter-date']}></div>
                    <div className={style['taskCounter-count']}>88</div>
                </div>
            </div>
        </div>
    )
}

export default TaskCounter