import produce from "immer";
import {DELETE_TASK, SET_TASK_COMPLETE, SET_TASK_IN_PROGRESS, SET_TASK_TODO} from '../types';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'New website for JCD.pl',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline: '2022-01-26T13:51:50'
        },
        {
            id: 2,
            title: 'Free PSD Template vol. 3',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline:  '2021-01-25T13:51:50'
        },
        {
            id: 3,
            title: 'Iconset Vol. 3',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline:  '2021-01-07T13:51:50'
        },
        {
            id: 4,
            title: 'New logo for Apple',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 1,
            deadline:  '2020-01-26T13:51:50'
        },
        {
            id: 5,
            title: 'Daily UI Kit',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 1,
            deadline:  '2021-03-22T13:51:50'
        },
        {
            id: 6,
            title: 'Business Cards',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 1,
            deadline:  '2021-03-17T13:51:50'
        },
        {
            id: 7,
            title: 'Free PSD Template vol. 1',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline:  '2020-11-03T13:51:50'
        },
        {
            id: 8,
            title: 'Iconset vol. 1',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline:  '2021-07-01T13:51:50'
        },
        {
            id: 9,
            title: 'New website for Symu.co',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline:  '2021-08-26T13:51:50'
        },
        {
            id: 10,
            title: 'Iconset vol. 2',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline:  '2021-01-12T13:51:50'
        },
        {
            id: 11,
            title: 'New website for Windu.org',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 12,
            title: 'lorem ipsum',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2022-01-07T13:51:50'
        },
        {
            id: 13,
            title: 'One more task',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 14,
            title: 'One more task 2',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline: '2021-07-07T13:51:50'
        },
        {
            id: 15,
            title: 'One more task 3',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 1,
            deadline: '2021-10-07T13:51:50'
        },
        {
            id: 16,
            title: 'One more task 4',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 17,
            title: 'One more task 5',
            description: 'description asdasdasd lorem100',
            doneStatus: 1,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 18,
            title: 'One more task 6',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 1,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 19,
            title: 'One more task 7',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-11-07T13:51:50'
        },
        {
            id: 20,
            title: 'One more task 8',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 21,
            title: 'One more task 9',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 22,
            title: 'One more task 10',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        },
        {
            id: 23,
            title: 'One more task 11',
            description: 'description asdasdasd lorem100',
            doneStatus: 0,
            progressStatus: 0,
            deadline: '2021-01-07T13:51:50'
        }
    ],
    dragAction: false
}

const tasks = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            };
        case SET_TASK_TODO:
            const updatedTasks = produce(state.tasks, draft => {
                const index = draft.findIndex(task => task.id === action.payload.id)

                if (index !== -1) {
                    draft[index].doneStatus = 0;
                    draft[index].progressStatus = 0;
                    if (action.payload.prevId) {
                        const prevIndex = draft.findIndex(task => task.id === action.payload.prevId)
                        draft.splice(prevIndex+1, 0, draft[index])
                    } else {
                        draft.unshift(draft[index]);
                    }
                    draft.splice(index+1, 1);
                }
            });

            console.log(updatedTasks)
            return {
                ...state,
                tasks: updatedTasks
            };
        case SET_TASK_IN_PROGRESS:
            const updatedTasks2 = produce(state.tasks, draft => {
                const index = draft.findIndex(task => task.id === action.payload)
                if (index !== -1) {
                    draft[index].doneStatus = 0;
                    draft[index].progressStatus = 1;
                }
            });

            return {
                ...state,
                tasks: updatedTasks2
            };

        case SET_TASK_COMPLETE:
            const updatedTasks3 = produce(state.tasks, draft => {
                const index = draft.findIndex(task => task.id === action.payload)
                if (index !== -1) {
                    draft[index].doneStatus = 1;
                    draft[index].progressStatus = 0;
                }
            });

            return {
                ...state,
                tasks: updatedTasks3
            };
        default: return state;
    }
}

export default tasks;

