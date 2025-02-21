import React, { useState } from 'react'
import { MessageSquare, User } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.password) {
      alert("Please fill out all fields.");
      return;
    }
    signup(formData); 
  };
  

  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/* Left */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2x1 font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60"> Get started with your free account</p>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full pl-10"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
              </div>
            </div>
        </form>
        </div>
      </div>
    </div> 
  );
}

export default SignUpPage