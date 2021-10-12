import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link, Route } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";

const Register = (props) => {
  return <Registerform histro={props.history} />;
};
function Registerform(props) {
  const validate = (values) => {
    const errors = {};

    if (!values.enroll) {
      errors.enroll = 'Required';
    } else if (values.enroll.length < 11) {
      errors.enroll = 'Must be 11 digits';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    } else if (values.password === '12345678') {
      errors.password = 'Must not be 12345678 !!!';
    }
    if (!values.repassword) {
      errors.repassword = 'Required';
    } else if (values.repassword !== values.password) {
      errors.repassword = "Second password doesn't match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      enroll: '',
      password: '',
      repassword: '',
    },
    validate,
    onSubmit: (values) => {



      alert(JSON.stringify(values, null, 2));
      let url;
      const data={enroll:values.enroll,password: values.password }

      url = "http://localhost:3001/students/register";

      axios.post(url, data).then((response) => {
        console.log(response);
        alert(response.data.error);
        if(response.data.code==1){
         //history.push('/introduction');
        }
      });
    },
  });

  return (
    <div className='LoginPage'>
      <h1>Register(For Students) </h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='enroll'>Enrollment Number</label>

        <input
          id='enroll'
          name='enroll'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.enroll}
        />
        {formik.touched.enroll && formik.errors.enroll ? (
          <div className='error'>{formik.errors.enroll}</div>
        ) : null}
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}
        <label htmlFor='repassword'>Password again</label>
        <input
          id='repassword'
          name='repassword'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword}
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <div className='error'>{formik.errors.repassword}</div>
        ) : null}

        <button id='Loginbutton' type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
}
export default Register;
