import React, { useState } from 'react'
import './sign-up.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = state
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords dont match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (e) {
      console.log(e)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }
  return (
    <div className={'sign-up'}>
      <h2 className={'title'}>I dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={'sign-up-form'} onSubmit={handleSubmit}>
        <FormInput
          type={'text'}
          name={'displayName'}
          value={displayName}
          onChange={handleChange}
          label={'Display Name'}
          required={true}
        />
        <FormInput
          type={'email'}
          name={'email'}
          value={email}
          onChange={handleChange}
          label={'Email'}
          required={true}
        />
        <FormInput
          type={'password'}
          name={'password'}
          value={password}
          onChange={handleChange}
          label={'Password'}
          required={true}
        />
        <FormInput
          type={'password'}
          name={'confirmPassword'}
          value={confirmPassword}
          onChange={handleChange}
          label={'Confirm Password'}
          required={true}
        />
        <CustomButton type={'submit'}>SIGN UP</CustomButton>
      </form>
    </div>
  )
}
export default SignUp
