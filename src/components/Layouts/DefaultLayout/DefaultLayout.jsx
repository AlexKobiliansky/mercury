import React from 'react';

import classNames from 'classnames';
import {connect} from 'react-redux';

import s from './DefaultLayout.module.sass';
import Header from './Header/Header';
import PageContent from './PageContent/PageContent';
import Sidebar from './Sidebar/Sidebar';

function DefaultLayout({openedSidebar}) {
  return (
    <div className={s.page}>
      <Sidebar/>
      <div className={classNames(s.pageBody, {[s.hiddenSidebar]: !openedSidebar})}>
        <Header/>
        <PageContent/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    openedSidebar: state.sidebar.openedSidebar,
  }
}

export default connect(mapStateToProps)(DefaultLayout);