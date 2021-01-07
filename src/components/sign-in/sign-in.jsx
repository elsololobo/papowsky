import React, { useCallback, useState } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    setState({
      email: '',
      password: '',
    })
  }, [])

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
        <CustomButton type={'submit'}>SIGN IN</CustomButton>
      </form>
    </div>
  )
}
export default SignIn
