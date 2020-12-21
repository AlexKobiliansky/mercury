import React, {useState} from 'react';
import { ReactSVG } from 'react-svg';
import { withRouter } from 'react-router-dom'

import styles from './Forms.module.sass';

import usernameSvg from '../../../img/icons/username-icon.svg';
import passwordSvg from '../../../img/icons/password-icon.svg';

function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let changeName = (e) => {
        setUsername(e.target.value);
    }

    let changePass = (e) => {
        setPassword(e.target.value);
    }

    let submitForm = (e) => {
        e.preventDefault();
        let savedName = JSON.parse(localStorage.getItem('username'));
        if (username === savedName) {
            localStorage.setItem('auth', true);
            props.history.push("/")
        } else {
            alert('something is wrong!');
        }
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Welcome <span>back!</span></h1>
            <div className={styles.formLabelsWrap}>
                <label>
                    <ReactSVG src={usernameSvg} wrapper='span'/>
                    <input name='username' placeholder='Username' onChange={changeName} value={username}/>
                </label>
                <label>
                    <ReactSVG src={passwordSvg} wrapper='span'/>
                    <input type='password' name='password' placeholder='Password' onChange={changePass} value={password}/>
                </label>
            </div>
            <button>Enter</button>
        </form>
    );
}

export default withRouter(LoginForm);