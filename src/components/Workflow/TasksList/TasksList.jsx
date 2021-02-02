import React from 'react';
import Task from "../Task/Task";
import {Draggable, Droppable} from 'react-beautiful-dnd';

//styles
import s from './TasksList.module.sass'

function TasksList(props) {

    let num = props.tasks.length;

    return (
        <div>
            <div className={s.header}>
                <h2>{props.title} <span>({num})</span></h2>
            </div>
            <Droppable droppableId={props.listId}>
                {provided => (
                    <div ref={provided.innerRef}
                         {...provided.droppableProps}>
                        {
                            props.tasks && props.tasks.map((task, index) => {
                                return <Draggable draggableId={`${task.id}`} index={index} key={task.id}>
                                    {(provided) => (
                                        <div {...provided.draggableProps}
                                             {...provided.dragHandleProps}
                                             ref={provided.innerRef}
                                        className={s.taskWrap}>

                                            <Task
                                                key={task.id}
                                                task={task}
                                                index={index}
                                            />

                                        </div>
                                    )}
                                </Draggable>
                            })
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default TasksList;