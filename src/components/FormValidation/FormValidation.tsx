import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { IForm } from "../../types/types";
import './FormValidation.scss'

const SignSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const FormValidation: FC<IForm> = ({ title, handleClick }) => (
  <Formik
    initialValues={{
      password: '',
      email: '',
    }}
    validationSchema={SignSchema}
    onSubmit={values => {
      handleClick(values.email, values.password)
    }}
  >
    {({ errors, touched }) => (
      <Form className='form'>
        <Field
          placeholder='E-mail'
          name="email"
          type="email"
          autoComplete='on'
          className='form__email'
        />
        {errors.email && touched.email ? <div className='form__email-error'>{errors.email}</div> : null}
        <Field
          placeholder='Password'
          name="password"
          type='password'
          autoComplete='on'
          className='form__password'
        />
        {errors.password && touched.password ? <div className='form__password-error'>{errors.password}</div> : null}
        <button
          className='form__button'
          type="submit"
        >
          {title}
        </button>
      </Form>
    )}
  </Formik>
);