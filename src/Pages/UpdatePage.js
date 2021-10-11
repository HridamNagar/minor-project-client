import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';

import '../App.css';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { useFormik } from 'formik';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const Update = () => {
  return (
    <div
      style={{
        textAlign: 'left',
      }}
    >
      <Updatejsx />
      <Internshipjsx />
      <Projectjsx />
      <Achievementsjsx />
    </div>
  );
};
function Updatejsx() {
  const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = 'Required';
    }
    if (!values.last_name) {
      errors.last_name = 'Required';
    }

    if (!values.enroll) {
      errors.enroll = 'Required';
    } else if (values.enroll.length < 11) {
      errors.enroll = 'Must be 11 digits';
    }

    if (!values.dob) {
      errors.dob = 'Required';
    }
    if (!values.country) {
      errors.country = 'Required';
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
      first_name: '',
      last_name: '',
      enroll: '',
      dob: '',
      country: '',
      password: '',
      repassword: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='Updatepage'>
      <h1>Your Form </h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='enroll'>First Name</label>
        <input
          id='first_name'
          name='first_name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
        />
        {formik.touched.first_name && formik.errors.first_name ? (
          <div className='error'>{formik.errors.first_name}</div>
        ) : null}
        <label htmlFor='enroll'>last Name</label>
        <input
          id='last_name'
          name='last_name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
        />
        {formik.touched.last_name && formik.errors.last_name ? (
          <div className='error'>{formik.errors.last_name}</div>
        ) : null}
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
        <label htmlFor='enroll'>Date of Birth</label>
        <input
          id='dob'
          name='dob'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dob}
        />
        {formik.touched.dob && formik.errors.dob ? (
          <div className='error'>{formik.errors.dob}</div>
        ) : null}
        <label htmlFor='enroll'>Country</label>
        <input
          id='country'
          name='country'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        />
        {formik.touched.country && formik.errors.country ? (
          <div className='error'>{formik.errors.country}</div>
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
          Update Personal Details
        </button>
      </form>
    </div>
  );
}

const initialValues_for_internship = {
  internships: [
    {
      name_of_company: '',
      job_profile: '',
      job_description: '',
    },
  ],
};
const initialValues_for_project = {
  projects: [
    {
      name_of_project: '',
      project_description: '',
      tech_used: '',
    },
  ],
};
const initialValues_for_achievement = {
  achievements: [
    {
      name_of_achievement: '',
      achievement_description: '',
    },
  ],
};

const Internshipjsx = () => (
  <div
    style={{
      textAlign: 'left',
      marginLeft: '40px',
      marginTop: '40px',
    }}
  >
    <h1>Internship</h1>
    <Formik
      initialValues={initialValues_for_internship}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name='internships'>
            {({ insert, remove, push }) => (
              <div>
                {values.internships.length > 0 &&
                  values.internships.map((internships, index) => (
                    <div className='row' key={index}>
                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                          }}
                          htmlFor={`internships.${index}.name_of_company`}
                        >
                          Name of Company :
                        </label>
                        <Field
                          name={`internships.${index}.name_of_company`}
                          placeholder='Google'
                          type='text'
                        />
                        <ErrorMessage
                          name={`internships.${index}.name_of_company`}
                          component='div'
                          className='field-error'
                        />
                      </div>

                      <div className='col'>
                        <label
                          style={{
                            marginLeft: '47px',
                            fontWeight: 'bolder',
                          }}
                          htmlFor={`internships.${index}.job_profile`}
                        >
                          <span
                            style={{
                              width: '50',
                            }}
                          ></span>
                          Job Profile :
                        </label>
                        <Field
                          name={`internships.${index}.job_profile`}
                          placeholder='Software Developer'
                          type='text'
                        />
                        <ErrorMessage
                          name={`internships.${index}.job_profile`}
                          component='div'
                          className='field-error'
                        />
                      </div>
                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                            marginLeft: '17px',
                          }}
                          htmlFor={`internships.${index}.job_description`}
                        >
                          Job Description :
                        </label>
                        <Field
                          name={`internships.${index}.job_description`}
                          placeholder='Full stack Development'
                          type='text'
                        />
                        <ErrorMessage
                          name={`internships.${index}.job_description`}
                          component='div'
                          className='field-error'
                        />
                      </div>
                      <div>
                        <button
                          type='button'
                          id='cross'
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type='button'
                  id='Loginbutton'
                  onClick={() =>
                    push({
                      name_of_company: '',
                      job_profile: '',
                      job_description: '',
                    })
                  }
                >
                  Add Internship
                </button>
              </div>
            )}
          </FieldArray>
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <button id='Internbutton' type='submit'>
              Done
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
const Projectjsx = () => (
  <div
    style={{
      textAlign: 'left',
      marginLeft: '40px',
      marginTop: '40px',
    }}
  >
    <h1>Projects</h1>
    <Formik
      initialValues={initialValues_for_project}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name='projects'>
            {({ insert, remove, push }) => (
              <div>
                {values.projects.length > 0 &&
                  values.projects.map((projects, index) => (
                    <div className='row' key={index}>
                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                            marginLeft: '20px',
                          }}
                          htmlFor={`projects.${index}.name_of_project`}
                        >
                          Name of Project :
                        </label>
                        <Field
                          name={`projects.${index}.name_of_project`}
                          placeholder='Algo Visualiser'
                          type='text'
                        />
                        <ErrorMessage
                          name={`projects.${index}.name_of_project`}
                          component='div'
                          className='field-error'
                        />
                      </div>

                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                          }}
                          htmlFor={`projects.${index}.project_description`}
                        >
                          <span
                            style={{
                              width: '50',
                            }}
                          ></span>
                          Project Description :
                        </label>
                        <Field
                          name={`projects.${index}.project_description`}
                          placeholder='Created Website using react'
                          type='text'
                        />
                        <ErrorMessage
                          name={`projects.${index}.project_description`}
                          component='div'
                          className='field-error'
                        />
                      </div>
                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                            marginLeft: '10px',
                          }}
                          htmlFor={`projects.${index}.tech_used`}
                        >
                          Technology Used :
                        </label>
                        <Field
                          name={`projects.${index}.tech_used`}
                          placeholder='JavaScript,Nodejs..etc'
                          type='text'
                        />
                        <ErrorMessage
                          name={`friends.${index}.tech_used`}
                          component='div'
                          className='field-error'
                        />
                      </div>
                      <div>
                        <button
                          type='button'
                          id='cross'
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type='button'
                  id='Loginbutton'
                  onClick={() =>
                    push({
                      name_of_project: '',
                      project_description: '',
                      tech_used: '',
                    })
                  }
                >
                  Add Project
                </button>
              </div>
            )}
          </FieldArray>
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <button id='Internbutton' type='submit'>
              Done
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
const Achievementsjsx = () => (
  <div
    style={{
      textAlign: 'left',
      marginLeft: '40px',
      marginTop: '40px',
    }}
  >
    <h1>Achievements</h1>
    <Formik
      initialValues={initialValues_for_achievement}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name='achievements'>
            {({ insert, remove, push }) => (
              <div>
                {values.achievements.length > 0 &&
                  values.achievements.map((achievements, index) => (
                    <div className='row' key={index}>
                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                            marginLeft: '15px',
                          }}
                          htmlFor={`achievements.${index}.name_of_achievement`}
                        >
                          Name of Achievement :
                        </label>
                        <Field
                          name={`achievements.${index}.name_of_achievement`}
                          placeholder='Codechef'
                          type='text'
                        />
                        <ErrorMessage
                          name={`achievements.${index}.name_of_achievement`}
                          component='div'
                          className='field-error'
                        />
                      </div>

                      <div className='col'>
                        <label
                          style={{
                            fontWeight: 'bolder',
                          }}
                          htmlFor={`achievements.${index}.achievement_description`}
                        >
                          <span
                            style={{
                              width: '50',
                            }}
                          ></span>
                          Achievement Description:
                        </label>
                        <Field
                          name={`achievements.${index}.achievement_description`}
                          placeholder='CodeChef Rating - 6 star'
                          type='text'
                        />
                        <ErrorMessage
                          name={`achievements.${index}.achievement_description`}
                          component='div'
                          className='field-error'
                        />
                      </div>

                      <div>
                        <button
                          type='button'
                          id='cross'
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type='button'
                  id='Loginbutton'
                  onClick={() =>
                    push({
                      name_of_achievement: '',
                      achievement_description: '',
                    })
                  }
                >
                  Add Achievement
                </button>
              </div>
            )}
          </FieldArray>
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <button id='Internbutton' type='submit'>
              Done
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Update;
