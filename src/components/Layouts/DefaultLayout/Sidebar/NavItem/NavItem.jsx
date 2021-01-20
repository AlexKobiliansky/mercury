import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavItem.module.sass'

function NavItem(props) {
    return (
        <li className={s.navItem}><NavLink to={props.path} exact activeClassName={s.active}>
            <div className={s.imgWrap}>
                <img src={props.icon} alt={props.name}/>
            </div>

            <span>{props.name}</span></NavLink></li>
    );
}

export default NavItem;