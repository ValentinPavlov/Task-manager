import style from './TaskTable.module.css';
import { Tasklist } from './Tasklist';

const TaskTable = ({ userTasks }) => {
    return (
        <div className={style['taskTable-content']} >
            <p className={style['taskTable-text']}>Tasks:</p>
            <div className={style['tasks-block']}>
            {userTasks.map((el, index) => <Tasklist key={index} num={index} task={el} />)}
            </div>
        </div>

    )
}

export default TaskTable