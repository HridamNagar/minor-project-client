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

const Search = (props) => {
  return <SLogin histro={props.history} />;
};
function SLogin(props) {
  const validate = (values) => {
    const errors = {};

    if (!values.enroll) {
      errors.enroll = 'Required';
    } else if (values.enroll.length < 11) {
      errors.enroll = 'Must be 11 digits';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      enroll: '',
    },
    validate,
    onSubmit: (values) => {
     let url = "http://localhost:3001/students/find";
      const data=values;
      axios.post(url, data).then((response) => {
        console.log(response);
        alert(response.data.error);

      });
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='LoginPage'>
      <h1>Search Student by Enrollment Number</h1>
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

        <button id='Loginbutton' type='submit'>
          Search-{formik.values.enroll}
        </button>
      </form>
    </div>
  );
}
export default Search;
