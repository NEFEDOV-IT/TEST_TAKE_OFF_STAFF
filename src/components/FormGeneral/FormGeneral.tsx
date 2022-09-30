import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { IForm } from "../../types/types";
import './FormGeneral.scss'
import { FormGeneralSchema } from "../../utils/validate";

export const FormGeneral: FC<IForm> = ({ title, handleClick }) => (
  <Formik
    initialValues={{
      password: '',
      email: '',
    }}
    validationSchema={FormGeneralSchema}
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
        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
        <Field
          placeholder='Password'
          name="password"
          type='password'
          autoComplete='on'
          className='form__password'
        />
        {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}
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