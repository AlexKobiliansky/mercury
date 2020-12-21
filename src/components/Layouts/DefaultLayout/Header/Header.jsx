import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

function Header(props) {

    const logout = () => {
        localStorage.removeItem('auth');
        props.history.push("/login")
    }
    return (
        <div className="header">
            <span onClick={logout}>Выйти</span>
        </div>
    );
}

export default withRouter(Header);