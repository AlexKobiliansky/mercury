import React, {useEffect, useState} from 'react';

import {ReactSVG} from 'react-svg';

import passwordSvg from '../../../img/icons/password-icon.svg';
import usernameSvg from '../../../img/icons/username-icon.svg';
import s from './Forms.module.sass';

import {Formik} from 'formik';
import * as yup from 'yup';
import {useHttp} from "../../../hooks/http.hook";


function RegisterForm() {
  const {loading, error, request, clearError, successMessage} = useHttp();

  const validationSchema = yup.object().shape({
    username: yup.string(),
      // .trim('Check if there any spaces at the beginning or/and at the end of field value')
      // .strict()
      // .typeError('Must be a string')
      // .required('Enter your name')
      // .min(3, 'Your username must be at least 3 characters length')
      // .max(30, 'Your username is to long. It must consist from 3 to 30 characters'),
    password: yup.string(),
      // .trim('Check if there any spaces at the beginning or/and at the end of field value')
      // .strict()
      // .typeError('Must be a string')
      // .required('Enter password')
      // .min(8, 'Your password must be at least 8 characters length')
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must contain one uppercase, one lowercase, one number and one special character"
      // ),
    confirmPassword: yup.string()
      .trim('Check if there any spaces at the beginning or/and at the end of field value')
      .strict()
      .typeError('Must be a string')
      .required('Confirm your password')
      .oneOf([yup.ref('password')], 'password mismatch'),
  });

  let submitForm = async (values) => {
    clearError();
    try {
      const data = await request(
        '/api/auth/register',
        'POST',
        {username: values.username, password: values.password});
    } catch (e) {}
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: ''
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
            <h1>Registration</h1>
            <div className={s.formLabelsWrap}>

              {successMessage && <div className={s.success}>{successMessage}</div>}

              <label className={touched.username && errors.username && s.hasError}>
                <ReactSVG src={usernameSvg} wrapper='span'/>
                <input
                  name='username'
                  placeholder='Username'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {touched.username && errors.username && <div className={s.error}>{errors.username}</div>}
              </label>

              <label className={touched.password && errors.password && s.hasError}>
                <ReactSVG src={passwordSvg} wrapper='span'/>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password && <div className={s.error}>{errors.password}</div>}
              </label>
              <label className={touched.confirmPassword && errors.confirmPassword && s.hasError}>
                <ReactSVG src={passwordSvg} wrapper='span'/>
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Repeat password'
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword &&
                <div className={s.error}>{errors.confirmPassword}</div>}
              </label>

              {error && <div className={s.serverErrors}>{error}</div>}
            </div>
            <button type="submit" disabled={(!isValid && !dirty) || loading} onClick={handleSubmit}>Enter</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;