import React from 'react';

import {Redirect} from 'react-router-dom';

export const withAuthRedirect = (Component) => {
  function RedirectComponent() {
    const data = JSON.parse(localStorage.getItem('userData'));
    const isAuthenticated = data && !!data.token

    if (!isAuthenticated) return <Redirect to='/login'/>

    return <Component/>
  }
  return RedirectComponent;
}