import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import CreateUser from './CreateUser'
import LoginForm from './LoginForm'
import LostPassword from './LostPassword'

import { UserContext } from '../../userContext'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login) return <Navigate to='/conta' />
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='criar' element={<CreateUser />} />
      <Route path='perdeu' element={<LostPassword />} />
      <Route path='resetar' element={<LoginPasswordReset />} />
    </Routes>
  )
}

export default Login
