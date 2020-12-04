import React from 'react';
import {Redirect} from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    function RedirectComponent() {
        let user = localStorage.getItem('user');
        if (!user) return <Redirect to='/login' />

        return <Component />
    }

    return RedirectComponent;
}