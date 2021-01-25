import React from 'react';
import ReactSelect from 'react-select';
import store from '../../../../redux/store';
import {connect} from 'react-redux';


import s from './Select.module.sass'

function Select(props) {

    const options = props.data ? props.data.map((item, index) => {
        return {value: item, label: item}
    }) : '';

    // let changeOption = (e) => {
    //     props.changeOption(e.value)
    // }

    console.log(props);

    let changeOptionRedux = (e) => {
        store.dispatch({
            type: 'SORT_STATUS',
            payload: {
                status: e.value
            }
        });

        console.log(store.getState());
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            padding: '15px 15px 15px 70px',
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

    return (
        <label className={s.selectLabel}>
            <span>Period:</span>
            { options &&
            <ReactSelect
                options={options}
                onChange={changeOptionRedux}
                styles={customStyles}
                defaultValue={options[0]}
            /> }
        </label>

    );
}

const mapState = (state, props) => {
    console.log(state)

    return {
        statusProps: state.status
    }
}

export default connect(mapState)(Select);