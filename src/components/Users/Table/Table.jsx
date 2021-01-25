import React, {useState} from 'react';
import Pagination from "../../ui/atoms/Pagination/Pagination";
import Row from "./Row/Row";

//styles
import s from './Table.module.sass';




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
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {pageOfItems.map(item =>
                    <Row
                        item={item}
                        key={item.id}
                        deleteUser={props.deleteUser}/>
                )}
                </tbody>
            </table>

            <Pagination items={props.data} onChangePage={onChangePage} pageSize={7}/>
        </div>

    );
}

export default Table;