import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Calendar(props) {
    return (
        <div>Calendar</div>
    );
}

export default withAuthRedirect(Calendar);