import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'
import AuthImagePattern from '../../components/AuthImagePattern'
import LogInForm from './LogInForm'


const LoginPage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
    <div className="flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageSquare className="size-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
            <p className="text-base-content/60">Sign in to your account</p>
          </div>
        </div>

        <LogInForm />

        <div className="text-center">
          <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
          </p>
        </div>
      </div>
    </div>
    <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />


  </div>
  )
}

export default LoginPage