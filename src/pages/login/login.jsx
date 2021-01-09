import React from 'react'
import './login.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sing-up'

const Login = () => {
  return (
    <div className={'sign-in-and-sign-up'}>
      <SignIn />
      <SignUp />
    </div>
  )
}
export default Login
