import React from 'react';
//styles
import s from './TasksList.module.sass'

function TasksList(props) {
    return (
        <div className={s.taskList}>
            <div className={s.header}>
                <h2>To Do <span>(6)</span></h2>
            </div>
            <div className={s.list}>
                list of tasks
            </div>
        </div>
    );
}

export default TasksList;