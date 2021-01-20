import React, {useState} from 'react';
import Pagination from "../../ui/atoms/Pagination/Pagination";

//styles
import s from './Table.module.sass';
import UserInfo from "../UserInfo/UserInfo";
import UserActivity from "../UserActivity/UserActivity";

function Table(props) {
    let [pageOfItems, setPageOfItems] = useState([]);

    let onChangePage = (pageOfItems) => {
        setPageOfItems(pageOfItems);
    }

    return (
        <div>
            <table className={s.usersTable}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Last activity</th>
                    <th>Mail</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {pageOfItems.map(item =>
                    <tr key={item.id}>
                        <td>
                            <UserInfo
                                name={item.name}
                                img={item.avatar}
                                post={item.post}
                                online={item.online} />
                        </td>
                        <td>
                            <UserActivity online={item.online} lastVisit={item.lastVisit}/>
                        </td>
                        <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                        <td><a href={"mailto:" + item.phone.replace(/[^\d]/g, '')}>{item.phone}</a></td>
                        <td></td>
                    </tr>
                )}
                </tbody>
            </table>

            <Pagination items={props.data} onChangePage={onChangePage} pageSize={7}/>
        </div>

    );
}

export default Table;