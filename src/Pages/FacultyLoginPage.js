import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";

const FacultyLogin = (props) => {
  return <FacultyLoginjsx histro={props.history} />;
};
function FacultyLoginjsx(props) {
  const validate = (values) => {
    const errors = {};

    if (!values.enroll) {
      errors.enroll = 'Required';
    } else if (values.enroll.length < 11) {
      errors.enroll = 'Must be 11 digits';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      enroll: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      let url;

      url = "http://localhost:3001/staff/login";
  
      axios.post(url, values).then((response) => {
       
        console.log(response);
  
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data.accessToken);
  
         // history.push("/introduction");
        }
      });
      alert(JSON.stringify(values, null, 2));
      props.histro.push('/search');
    },
  });

  return (
    <div className='LoginPage'>
      <h1>Login(For Faculty)</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='enroll'>Faculty Enrollment Number</label>

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

        <button id='Loginbutton' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
export default FacultyLogin;
