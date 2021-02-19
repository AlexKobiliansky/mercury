import React, {useContext} from 'react';

import {withRouter} from 'react-router-dom'
import {ReactSVG} from 'react-svg';

import passwordSvg from '../../../img/icons/password-icon.svg';
import usernameSvg from '../../../img/icons/username-icon.svg';
import s from './Forms.module.sass';

import {Formik} from 'formik';
import * as yup from 'yup';
import {useHttp} from '../../../hooks/http.hook';
import {AuthContext} from '../../../context/AuthContext';


function LoginForm(props) {
  const auth = useContext(AuthContext);
  const {loading, error, request, clearError, successMessage} = useHttp();

  const validationSchema = yup.object().shape({
    username: yup.string(),
    // .trim('Check if there any spaces at the beginning or/and at the end of field value')
    // .strict()
    // .typeError('Must be a string')
    // .required('Enter your name')
    // .min(3, 'Your username must be at least 3 characters length')
    // .max(30, 'Your username is to long. It must consist from 3 to 30 characters'),
    password: yup.string()
    // .trim('Check if there any spaces at the beginning or/and at the end of field value')
    // .strict()
    // .typeError('Must be a string')
    // .required('Enter password')
    // .min(8, 'Your password must be at least 8 characters length')
    // .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must contain one uppercase, one lowercase, one number and one special character"
    // )
  });

  let submitForm = async (values) => {
    // let savedName = JSON.parse(localStorage.getItem('username'));
    // if (values.username === savedName) {
    //   localStorage.setItem('auth', true);
    //   props.history.push("/")
    // } else {
    //   alert('something is wrong!');
    // }

    clearError();
    try {
      const data = await request(
        '/api/auth/login',
        'POST',
        {username: values.username, password: values.password});
      console.log(auth)
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div>

      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validateOnBlur
        onSubmit={(values) => {
          submitForm(values)
        }}
        validationSchema={validationSchema}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
          <form>
            <h1>Welcome <span>back!</span></h1>
            <div className={s.formLabelsWrap}>
              <label className={touched.username && errors.username && s.hasError}>
                <ReactSVG src={usernameSvg} wrapper='span'/>
                <input
                  name='username'
                  placeholder='Username'
                  onChange={handleChange}
                  value={values.username}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username &&
                <div className={s.error}>{errors.username}</div>}
              </label>
              <label className={touched.password && errors.password && s.hasError}>
                <ReactSVG src={passwordSvg} wrapper='span'/>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password &&
                <div className={s.error}>{errors.password}</div>}
              </label>
              {error && <div className={s.serverErrors}>{error}</div>}
            </div>
            <button type="submit" disabled={!isValid && !dirty || loading} onClick={handleSubmit}>Enter</button>
          </form>
        )}

      </Formik>
    </div>
  );
}

export default withRouter(LoginForm);