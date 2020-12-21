import React from 'react';
import s from './Hamburger.module.sass';
import classNames from 'classnames';

function Hamburger(props) {
    return (
        <div className={classNames(s.hamburger, {[s.active]: !props.hiddenSidebar})} onClick={props.toggleSidebar}>
            <div className={s.hamburgerInner}></div>
        </div>
    );
}

export default Hamburger;