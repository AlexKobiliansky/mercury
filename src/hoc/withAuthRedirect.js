import React, {useCallback, useContext, useEffect} from 'react';

import {Redirect} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const withAuthRedirect = (Component) => {

    function RedirectComponent() {
        // const auth = useContext(AuthContext);
        //
        // useEffect(() => {
        //     if (!auth.isAuthenticated) {
        //         return <Redirect to='/login'/>
        //     }
        // }, [auth])

        return <Component />

    }

    return RedirectComponent;
}