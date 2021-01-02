import React from 'react';

function Select(props) {

    let changeOption = (e) => {
        props.changeOption(e.target.value)
    }

    return (
        <label className="select">
            <select onChange={changeOption}>
                {props.data.map((item, index) => {
                  return <option value={item} key={index}>{item}</option>
                })}
            </select>
        </label>
    );
}

export default Select;