import React, {useState} from 'react';

import Menu from '@material-ui/core/Menu';
import {NavLink, withRouter} from 'react-router-dom';

import avaImg from 'img/avatar.png'

import s from './UserMnu.module.sass'


function UserMnu(props) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.removeItem('auth');
        props.history.push("/login")
    }

    return (
        <div className={s.userMnu}>
            <div className={s.avatar} onClick={handleClick}>
                <img src={avaImg} alt="alt"  />
            </div>
            <Menu
                className={s.menu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableScrollLock={true}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <NavLink to='/' onClick={handleClose}>Profile</NavLink>
                <NavLink to='/' onClick={handleClose}>Settings</NavLink>
                <span onClick={logout}>Logout</span>
            </Menu>
        </div>
    );
}

export default withRouter(UserMnu);