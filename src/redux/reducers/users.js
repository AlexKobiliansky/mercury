import avatar from '../../img/avatar.png';
import ava1 from '../../img/message-ava-1.jpg';
import ava2 from '../../img/message-ava-2.jpg';
import ava3 from '../../img/message-ava-3.jpg';
import ava4 from '../../img/message-ava-4.jpg';
import ava5 from '../../img/message-ava-5.jpg';
import ava6 from '../../img/message-ava-6.jpg';
import ava7 from '../../img/message-ava-7.jpg';
import {DELETE_USER, SORT_USERS} from '../types';

const initialState = {
    users: [
        {
            id: 1,
            name: 'John Doe',
            post: 'CEO',
            avatar: ava1,
            email: 'johndoe@design.com',
            phone: '(000) 111 111 111',
            online: 1,
            lastVisit: '2021-01-07T13:51:50'
        },
        {
            id: 2,
            name: 'Nina Jones',
            post: 'UX Designer',
            avatar: ava2,
            email: 'ninajones@design.com',
            phone: '(000) 222 222 222',
            online: 1,
            lastVisit: '2021-01-19T16:43:50'
        },
        {
            id: 3,
            name: 'Alex Smith',
            post: 'Web Designer',
            avatar: ava3,
            email: 'alexsmith@design.com',
            phone: '(000) 333 33 33 33',
            online: 0,
            lastVisit: '2021-01-12T10:51:50'
        },
        {
            id: 4,
            name: 'Ann Clooney',
            post: 'Account Manager',
            avatar: ava4,
            email: 'annclooney@design.com',
            phone: '(000) 444 444 444',
            online: 0,
            lastVisit: '2021-01-19T13:51:50'
        },
        {
            id: 5,
            name: 'Patric Smith',
            post: 'Project Manager',
            avatar: ava5,
            email: 'patricsmith@design.com',
            phone: '(000) 555 555 555',
            online: 1,
            lastVisit: '2021-01-07T13:51:50'
        },
        {
            id: 6,
            name: 'Nicky Hunt',
            post: 'Product Designer',
            avatar: ava6,
            email: 'nickyhunt@design.com',
            phone: '(000) 666 666 666',
            online: 0,
            lastVisit: '2021-01-20T13:51:50'
        },
        {
            id: 7,
            name: 'Jane Doe',
            post: 'Graphic Designer',
            avatar: ava7,
            email: 'janedoe@design.com',
            phone: '(000) 777 777 777',
            online: 0,
            lastVisit: '2021-01-20T13:51:50'
        },
        {
            id: 8,
            name: 'Alex Kobilianskiy',
            post: 'Team-lead',
            avatar: avatar,
            email: 'alex.kobilianskiy@gmail.com',
            phone: '(063) 622 20 **',
            online: 1,
            lastVisit: '2021-01-19T16:15:29'
        },
        {
            id: 9,
            name: 'John Doe 2',
            post: 'CEO',
            avatar: ava1,
            email: 'johndoe@design.com',
            phone: '(000) 111 111 111',
            online: 0,
            lastVisit: '2021-01-07T13:51:50'
        },
        {
            id: 10,
            name: 'Nina Jones 2',
            post: 'UX Designer',
            avatar: ava2,
            email: 'ninajones@design.com',
            phone: '(000) 222 222 222',
            online: 0,
            lastVisit: '2021-01-19T16:43:50'
        },
        {
            id: 11,
            name: 'Alex Smith 2',
            post: 'Web Designer',
            avatar: ava3,
            email: 'alexsmith@design.com',
            phone: '(000) 333 33 33 33',
            online: 0,
            lastVisit: '2021-01-02T10:51:50'
        },
        {
            id: 12,
            name: 'Ann Clooney 2',
            post: 'Account Manager',
            avatar: ava4,
            email: 'annclooney@design.com',
            phone: '(000) 444 444 444',
            online: 0,
            lastVisit: '2021-01-19T13:51:50'
        },
        {
            id: 13,
            name: 'Patric Smith 2',
            post: 'Project Manager',
            avatar: ava5,
            email: 'patricsmith@design.com',
            phone: '(000) 555 555 555',
            online: 0,
            lastVisit: '2021-01-07T13:51:50'
        },
        {
            id: 14,
            name: 'Nicky Hunt 2',
            post: 'Product Designer',
            avatar: ava6,
            email: 'nickyhunt@design.com',
            phone: '(000) 666 666 666',
            online: 0,
            lastVisit: '2021-01-20T13:51:50'
        },
        {
            id: 15,
            name: 'Jane Doe 2',
            post: 'Graphic Designer',
            avatar: ava7,
            email: 'janedoe@design.com',
            phone: '(000) 777 777 777',
            online: 1,
            lastVisit: '2021-01-20T06:51:50'
        },
    ],
    sorting: '',
}

const users = (state=initialState, action) => {
    switch (action.type) {
        case SORT_USERS:
            return {
                ...state,
                sorting: action.payload.sorting
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload)
            };

        default: return state;
    }
}

export default users;