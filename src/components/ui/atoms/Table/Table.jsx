import React from 'react';
import ava1 from "../../../../img/message-ava-1.jpg";
import ava2 from "../../../../img/message-ava-2.jpg";
import ava3 from "../../../../img/message-ava-3.jpg";
import ava4 from "../../../../img/message-ava-4.jpg";
import ava5 from "../../../../img/message-ava-5.jpg";
import ava6 from "../../../../img/message-ava-6.jpg";
import ava7 from "../../../../img/message-ava-7.jpg";
import avatar from "../../../../img/avatar.png";
import Pagination from "../../../Users/Pagination";


class Table extends React.Component {

    constructor(props) {
        super(props);

        let exampleItems = this.props.data;

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }





    render() {
        return (
            <div>
                {this.state.pageOfItems.map(item =>
                    <div key={item.id}>{item.name}</div>
                )}
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
        );
    }
}

export default Table;
