import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import AuthImagePattern from '../../components/AuthImagePattern';

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <SignUpForm />

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <AuthImagePattern title=" Join our community" subtitle="Connect with firends, share moments, and stay in touch with your loved ones."/>


    </div>
  );
};

export default SignUpPage;