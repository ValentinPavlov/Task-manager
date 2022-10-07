import style from './TaskTable.module.css'

const Tasklist = ({ num, task }) => {
    return (
        <>
            <p className={style['test']}>{num+1}: {task}</p>
        </>
    )
}

export { Tasklist }