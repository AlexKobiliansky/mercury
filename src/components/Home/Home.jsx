import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

function Home(props) {
    return (
        <div>Home</div>
    );
}

export default withAuthRedirect(Home);