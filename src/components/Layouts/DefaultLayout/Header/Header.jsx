import React from 'react';
import {withRouter} from 'react-router-dom';
import s from './Header.module.sass';
import Hamburger from './Hamburger/Hamburger';

function Header(props) {

    const logout = () => {
        localStorage.removeItem('auth');
        props.history.push("/login")
    }
    
    return (
        <div className={s.header}>
            <div className={s.headerLeft}>
                <Hamburger
                    toggleSidebar={props.toggleSidebar}
                    hiddenSidebar={props.hiddenSidebar} />

                    <div className="searchLine">
                        asd
                    </div>
            </div>

            <div className="headerRight">
                <span onClick={logout}>Выйти</span>
            </div>
        </div>
    );
}

export default withRouter(Header);