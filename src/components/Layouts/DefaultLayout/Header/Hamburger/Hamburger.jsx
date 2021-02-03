import React from 'react';
import classNames from 'classnames';
import s from './Hamburger.module.sass';
import {connect} from 'react-redux';
import {toggleSidebar} from '../../../../../redux/actions/sidebar';

function Hamburger({openedSidebar, toggleSidebar}) {
    return (
        <div className={classNames(s.hamburger, {[s.active]: openedSidebar})} onClick={toggleSidebar}>
            <div className={s.hamburgerInner} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        openedSidebar: state.sidebar.openedSidebar,
    }
}

const mapDispatchToProps = {
    toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);