import React from 'react';
import {Redirect} from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    function RedirectComponent() {
        let auth = localStorage.getItem('auth');
        if (!auth) return <Redirect to='/login' />

        return <Component />
    }

    return RedirectComponent;
}