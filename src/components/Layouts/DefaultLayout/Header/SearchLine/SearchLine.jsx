import React, {useState} from 'react';
import { ReactSVG } from 'react-svg';
import s from './SearchLine.module.sass'

import searchSvg from '../../../../../img/icons/search-icon.svg';

function SearchLine(props) {
    const [activeSearch, setActiveSearch] = useState(false)

    let toggleSearch = () => {
        setActiveSearch(!activeSearch);
    }

    return (
        <label className={s.searchLine}>
            {activeSearch
                ? <input name='search' placeholder='Поиск' onBlur={toggleSearch}/>
                : <ReactSVG src={searchSvg} wrapper='span' onClick={toggleSearch}/>}
        </label>
    );
}

export default SearchLine;