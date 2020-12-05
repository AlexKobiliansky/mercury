import React, {useState} from 'react';

function RegisterForm(props) {

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
        localStorage.setItem('username', JSON.stringify(username));
        console.log('registration success!');
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Registration</h1>
            <div className="formLabelsWrap">
                <label>
                    <input name='username' placeholder='Username' onChange={changeName} value={username}/>
                </label>
                <label>
                    <input type='password' name='password' placeholder='Password' onChange={changePass} value={password}/>
                </label>
            </div>
            <button>Enter</button>
        </form>
    );
}

export default RegisterForm;