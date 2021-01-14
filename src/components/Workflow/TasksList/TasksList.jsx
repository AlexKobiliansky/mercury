import React from 'react';
//styles
import s from './TasksList.module.sass'
import Task from "../Task/Task";

function TasksList(props) {

    let num = props.tasks.length;

    return (
        <div className={s.taskList}>
            <div className={s.header}>
                <h2>{props.title} <span>({num})</span></h2>
            </div>
            <div className={s.list}>
                {
                    props.tasks && props.tasks.map(task => {
                        return  <Task
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            doneStatus={task.doneStatus}
                            progressStatus={task.progressStatus}
                            deadline={task.deadline}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default TasksList;