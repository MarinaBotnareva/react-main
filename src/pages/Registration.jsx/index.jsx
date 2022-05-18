import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
    confPassword: yup.string().required().oneOf([yup.ref('password')]),
})

function Registration(){

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confPassword: '',
  }

  const handleSubmit = (data) => {
    console.log(data);
    formikBag.resetForm();
  }
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {
        (settings) => {
          console.log(settings)
          return (
            <Form>
              <Field className={errors.name ? 'error' : ''} name='name' placeholder='Name' />
              <ErrorMessage name="name" comonent="div"/>
              <Field name='email' placeholder='Email'/>
              <ErrorMessage name="email" comonent="div"/>
              <Field type="password" name='password' placeholder='Password'/>
              <ErrorMessage name="password" comonent="div"/>
              <Field type="password" name='confpassword'placeholder='Confirm password'/>
              <ErrorMessage name="confpassword" comonent="div"/>
              <button type="submit">Send</button>
            </Form>
          )
        }
      }

    </Formik>
  )
}

export default Registration