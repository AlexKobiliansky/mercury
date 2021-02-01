import React from 'react';
import ReactSelect from 'react-select';

import s from './Select.module.sass'

function Select({data, changeOption, customPadding, selectedOption}) {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            padding: customPadding ? customPadding.padding : '15px 15px 15px 70px',
            borderRadius: 30,
            outline: 'none',
            border: '1px solid #dadee7!important',
            boxShadow: 'none!important',
            cursor: 'pointer',
            background: 'transparent'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: 0,
            margin: 0,
            width: '100%',
            fontSize: 14,
            color: '#000000',
            lineHeight: 1
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: 0,
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            width: '100%',
            color: '#000',
            fontWeight: '500'
        }),
        singleValue: (provided) => ({
            ...provided,
            width: '100%',
            color: '#000',
            fontWeight: '500'
        })
    }

    const options = data ? data.list.map((item, index) => {
        return {value: item, label: item}
    }) : ''; 

    // let changeSelect = (e) => {
    //     changeOption(e.value)
    // }

    const defaultValue = selectedOption ? selectedOption : options[0];

    return (
        <label className={s.selectLabel}>
            <span>{data.label}:</span>
            { options &&
            <ReactSelect
                options={options}
                onChange={changeOption}
                styles={customStyles}
                defaultValue={defaultValue}
            /> }
        </label>
    );
}



export default (Select);