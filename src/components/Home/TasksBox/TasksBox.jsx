import React from 'react';
import BoxHeader from '../../ui/atoms/BoxHeader/BoxHeader';
import Label from '../../ui/atoms/Label/Label';
import Task from '../../Workflow/Task/Task';
import Box from '../../ui/atoms/Box/Box';
import {connect} from 'react-redux';
//styles
import hs from '../Home.module.sass';

function TasksBox({tasks}) {

    let today = new Date()

    let undoneTasks = tasks.reduce((number, current) => {
        return !current.doneStatus ? ++number : number
    }, 0);

    let delayedTasks = tasks.reduce((number, current) => {
        let date = new Date(Date.parse(current.deadline));
        return (date < today) ? ++number : number
    }, 0);

    let items = tasks.slice(0, 4);

    return (
        <Box>
            <BoxHeader customClass={hs.paddingHeader}>
                <h3>Tasks</h3>
                <div className={hs.labelsWrap}>
                    <Label title={undoneTasks} />
                    <Label customClass={hs.redLabel} title={delayedTasks} />
                </div>
            </BoxHeader>

            {
                items?.map(task => {
                    return <Task
                        customClass={hs.task}
                        key={task.id}
                        task={task}
                    />
                })
            }
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps)(TasksBox);