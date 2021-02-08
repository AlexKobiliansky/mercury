import React, {useState, useEffect} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Select from "../ui/atoms/Select/Select";
import BoxHeader from "../ui/atoms/BoxHeader/BoxHeader";
import {connect} from 'react-redux';
import Table from "./Table/Table";
import {sortUsers} from "../../redux/actions/users";
import hs from "../Home/Home.module.sass";
import {ACTIVE_FIRST, ACTIVE_LAST, BY_NAME_ASC, BY_NAME_DESC, BY_POST_ASC, BY_POST_DESC} from '../../constants/charts/selects';


const selectData = {
    list: ['Default', ACTIVE_FIRST, ACTIVE_LAST, BY_NAME_ASC, BY_NAME_DESC, BY_POST_ASC, BY_POST_DESC],
    label: 'Sort'
};

function Users({sorting, sortUsers, usersList}) {

    let [users, setUsers] = useState(usersList);

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
    }, [sorting]);

    useEffect(() => {
        setUsers(usersList);
    }, [usersList]);

    return (
        <div>
            <BoxHeader customClass={hs.marginHeader}>
                <h1>Users {num>0 && <span>({num})</span>}</h1>
                <Select
                    data={selectData}
                    changeOption={(e) => sortUsers(e.value)}
                    customPadding={{padding: '15px 15px 15px 52px'}}
                    selectedOption={sorting}
                />
            </BoxHeader>

            <Table data={users}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sorting: state.users.sorting,
        usersList: state.users.users
    }
}

const mapDispatchToProps = {
    sortUsers
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Users));