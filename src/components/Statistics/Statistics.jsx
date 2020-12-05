import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Statistics(props) {
    return (
        <div>Statistics</div>
    );
}

export default withAuthRedirect(Statistics);