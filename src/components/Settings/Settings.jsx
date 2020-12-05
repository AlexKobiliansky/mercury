import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Settings(props) {
    return (
        <div>Settings</div>
    );
}

export default withAuthRedirect(Settings);