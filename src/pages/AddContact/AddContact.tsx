import React, { FC, MouseEvent, useEffect } from 'react';
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addContact } from "../../store/users.slice/users.slice";
import { AddContactSchema } from "../../utils/validate";
import './AddContact.scss'
import { getUser } from "../../utils/selectors";

const AddContact: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLogged } = useAppSelector(getUser)

  useEffect(() => {
    if (!isLogged) {
      navigate('/register')
    }
  })

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <main>
      <div className="container">
        <div className="contact">
          <h1>Add contact</h1>
          <Formik
            initialValues={{
              username: '',
              name: '',
              phone: '',
              email: '',
              id: Date.now(),
            }}
            validationSchema={AddContactSchema}
            onSubmit={values => {
              dispatch(addContact(values))
              navigate('/')
            }}
          >
            {({ errors, touched }) => (
              <Form className='contact__form'>
                <Field
                  placeholder='Username'
                  name="username"
                  type='text'
                  className='contact__form-username'
                />
                {errors.username && touched.username ?
                  <div className='error'>{errors.username}</div> : null}
                <Field
                  placeholder='Name'
                  name="name"
                  type='text'
                  className='contact__form-name'
                />
                {errors.name && touched.name ? <div className='error'>{errors.name}</div> : null}
                <Field
                  placeholder='Phone'
                  name="phone"
                  type='tel'
                  className='contact__form-phone'
                />
                {errors.phone && touched.phone ? <div className='error'>{errors.phone}</div> : null}
                <Field
                  placeholder='E-mail'
                  name="email"
                  type="email"
                  autoComplete='on'
                  className='contact__form-email'
                />
                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                <button
                  onClick={handleClick}
                  className='contact__form-button'
                >
                  Back
                </button>
                <button
                  className='contact__form-button-submit'
                  type="submit"
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default AddContact;