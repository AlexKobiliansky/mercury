import React from 'react';

import classNames from 'classnames';
import {connect} from 'react-redux';

import s from './DefaultLayout.module.sass';
import Header from './Header/Header';
import PageContent from './PageContent/PageContent';
import Sidebar from './Sidebar/Sidebar';
import {useAuth} from '../../../hooks/auth.hook';
import {AuthContext} from '../../../context/AuthContext';

function DefaultLayout({openedSidebar}) {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <div className={s.page}>
      <Sidebar/>
      <div className={classNames(s.pageBody, {[s.hiddenSidebar]: !openedSidebar})}>
        <Header/>
        <PageContent/>
      </div>
    </div>
    </AuthContext.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    openedSidebar: state.sidebar.openedSidebar,
  }
}

export default connect(mapStateToProps)(DefaultLayout);