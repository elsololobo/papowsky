import React, { useState } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [email, password] = state

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState({
        email: '',
        password: '',
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setState({ ...state, [name]: value })
  }
  return (
    <div className={'sign-in'}>
      <h2>I Already Have An Account</h2>
      <span>Sing In With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name={'email'}
          type={'email'}
          value={state.email}
          required={true}
          handleChange={handleChange}
          label={'Email'}
        />
        <FormInput
          name={'password'}
          type={'password'}
          value={state.password}
          required={true}
          handleChange={handleChange}
          label={'Password'}
        />
        <div className={'buttons'}>
          <CustomButton type={'submit'}>SIGN IN</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            type={'button'}
            isGoogleSignIn={true}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
export default SignIn
