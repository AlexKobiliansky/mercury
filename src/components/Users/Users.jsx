import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Users(props) {
    return (
        <div>Users</div>
    );
}

export default withAuthRedirect(Users);