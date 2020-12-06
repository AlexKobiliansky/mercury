import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';

import s from './DefaultLayout.module.sass';

function DefaultLayout(props) {
    return (
        <div className={s.page}>
            <Sidebar />
            <div className={s.pageBody}>
                <Header />
                <PageContent />
            </div>
        </div>
    );
}

export default DefaultLayout;