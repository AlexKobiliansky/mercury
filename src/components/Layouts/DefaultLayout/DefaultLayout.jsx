import React, {useState} from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PageContent from './PageContent/PageContent';
import classNames from 'classnames';

import s from './DefaultLayout.module.sass';

function DefaultLayout(props) {
    const [hiddenSidebar, setHiddenSidebar] = useState(false);

    const toggleSidebar = ()=> {
        setHiddenSidebar(!hiddenSidebar);
    }

    return (
        <div className={s.page}>
            <Sidebar hiddenSidebar={hiddenSidebar} />
            <div className={classNames(s.pageBody, {[s.hiddenSidebar]: hiddenSidebar})}>
                <Header toggleSidebar={toggleSidebar}
                        hiddenSidebar={hiddenSidebar}/>
                <PageContent />
            </div>
        </div>
    );
}

export default DefaultLayout;