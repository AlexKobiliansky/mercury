import React from 'react';

import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Settings() {
    return (
        <div>Settings</div>
    );
}

export default withAuthRedirect(Settings);