import React, {useState, useEffect} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Select from "../ui/atoms/Select/Select";
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import {connect} from 'react-redux';
import Table from "./Table/Table";
import {sortUsers} from "../../redux/actions/users";

//styles
import hs from "../Home/Home.module.sass";
//images
import ava1 from "img/message-ava-1.jpg";
import ava2 from "img/message-ava-2.jpg";
import ava3 from "img/message-ava-3.jpg";
import ava4 from "img/message-ava-4.jpg";
import ava5 from "img/message-ava-5.jpg";
import ava6 from "img/message-ava-6.jpg";
import ava7 from "img/message-ava-7.jpg";
import avatar from "img/avatar.png";

const ACTIVE_FIRST = 'Active first';
const ACTIVE_LAST = 'Active last';
const BY_NAME_ASC = 'By name ASC';
const BY_NAME_DESC = 'By name DESC';
const BY_POST_ASC = 'By post ASC';
const BY_POST_DESC = 'By post DESC';

function Users({sorting, sortUsers}) {

    let [users, setUsers] = useState([
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
    ]);

    const num = users.length;

    useEffect(() => {
        switch (sorting) {
            case ACTIVE_FIRST:
                users.sort((a, b) => b.online - a.online);
                break;
            case ACTIVE_LAST:
                users.sort((a, b) => a.lastVisit > b.lastVisit? 1 : -1);
                users.sort((a, b) => a.online - b.online);
                break;
            case BY_NAME_ASC:
                users.sort((a, b) => b.name < a.name ? 1 : -1);
                break;
            case BY_NAME_DESC:
                users.sort((a, b) => b.name > a.name ? 1 : -1);
                break;
            case BY_POST_ASC:
                users.sort((a, b) => b.post < a.post ? 1 : -1);
                break;
            case BY_POST_DESC:
                users.sort((a, b) => b.name > a.name ? 1 : -1);
                break;
            case 'Default':
                users.sort((a, b) => a.id - b.id);
                break;
            default:
                users.sort((a, b) => a.id > b.id ? 1 : -1);
        }

        setUsers([...users]); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sorting])

    let selectData = {
        list: ['Default', ACTIVE_FIRST, ACTIVE_LAST, BY_NAME_ASC, BY_NAME_DESC, BY_POST_ASC, BY_POST_DESC],
        label: 'Sort'
    };

    let onSortUsers = (e) => {
        sortUsers(e.value);
    }

    let deleteUser = (id) => {
        let user = users.find(user => user.id === id);
        if (window.confirm('Delete user "' + user.name + '" Are you sure?')) {
            setUsers(users.filter(user => user.id !== id))
        }
    }

    return (
        <div>
            <BoxHeader customClass={hs.marginHeader}>
                <h1>Users {num>0 && <span>({num})</span>}</h1>
                <Select
                    data={selectData}
                    changeOption={onSortUsers}
                    customPadding={{padding: '15px 15px 15px 60px'}}
                    selectedOption={sorting}
                />
            </BoxHeader>

            <Table data={users} deleteUser={deleteUser}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sorting: state.users.sorting
    }
}

const mapDispatchToProps = {
    sortUsers
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Users));