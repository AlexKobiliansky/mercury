import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Workflow(props) {

    return (
        <div>Workflow</div>
    );
}

export default withAuthRedirect(Workflow);