import React, {useState} from 'react';
import {ReactSVG} from 'react-svg';

import styles from './Forms.module.sass';

import usernameSvg from '../../../img/icons/username-icon.svg';
import passwordSvg from '../../../img/icons/password-icon.svg';

function RegisterForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    let changeName = (e) => {
        setUsername(e.target.value);
    }

    let changePass = (e) => {
        setPassword(e.target.value);
    }

    let changeRepeatPass = (e) => {
        setRepeatPassword(e.target.value);
    }

    let submitForm = (e) => {
        e.preventDefault();
        localStorage.setItem('username', JSON.stringify(username));
        alert('registration success!');
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Registration</h1>
            <div className={styles.formLabelsWrap}>
                <label>
                    <ReactSVG src={usernameSvg} wrapper='span'/>
                    <input name='username' placeholder='Username' onChange={changeName} value={username}/>
                </label>
                <label>
                    <ReactSVG src={passwordSvg} wrapper='span'/>
                    <input type='password' name='password' placeholder='Password' onChange={changePass} value={password}/>
                </label>
                <label>
                    <ReactSVG src={passwordSvg} wrapper='span'/>
                    <input type='password' name='repeat_password' placeholder='Repeat password' onChange={changeRepeatPass} value={repeatPassword}/>
                </label>
            </div>
            <button>Enter</button>
        </form>
    );
}

export default RegisterForm;