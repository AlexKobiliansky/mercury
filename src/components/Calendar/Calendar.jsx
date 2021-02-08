import React from 'react';

import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Calendar() {
    return (
        <div>Calendar</div>
    );
}

export default withAuthRedirect(Calendar);