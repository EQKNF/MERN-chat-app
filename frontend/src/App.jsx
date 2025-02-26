import {Routes, Route, Navigate} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/signUp/SignUpPage'
import LoginPage from './pages/logIn/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore'


const App = () => {
  const {authUser, checkAuth} = useAuthStore()
  useEffect(() => {
    checkAuth() 
  }, [checkAuth])

  // console.log({authUser})

  const {theme} = useThemeStore()

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App