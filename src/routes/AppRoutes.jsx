import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import AdminDashboard from '../pages/AdminDashboard'
import UserDashboard from '../pages/UserDashboard'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/user' element={<UserDashboard/>} />
    </Routes>
    </>
  )
}

export default AppRoutes