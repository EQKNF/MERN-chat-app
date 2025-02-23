import React, { useState } from 'react';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import InputField from './InputField';
import { useAuthStore } from '../../store/useAuthStore';
import toast from 'react-hot-toast';


const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
    });
  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return toast.error('Full name is required.');
    }
    if (!formData.email.trim()) {
      return toast.error('Email is required.');
    }
    if(!/\S+@\S+\.\S+/.test(formData.email)){
      return toast.error('Email is invalid.');
    }
    if (!formData.password.trim()) {
      return toast.error('Password is required.');
    }
    if(formData.password.length < 6){
      return toast.error('Password must be at least 6 characters.');
     
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if(success===true) signup(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField label="Full Name" type="text" placeholder="Full Name" icon={User} value={formData.fullname} name="fullname" onChange={handleChange} />
      <InputField label="Email" type="email" placeholder="Email" icon={Mail} value={formData.email} name="email" onChange={handleChange} />
      <InputField label="Password" type={showPassword ? 'text' : 'password'} placeholder="Password" icon={Lock} value={formData.password} name="password" onChange={handleChange} showPasswordToggle onToggle={() => setShowPassword(!showPassword)} />
      
      <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
        {isSigningUp ? (
          <>
            <Loader2 className="size-5 text-white animate-spin" /> Loading...
          </>
        ) : (
          'Create account'
        )}
      </button>
    </form>
  );
};

export default SignUpForm;
