import React, { useState } from 'react';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import InputField from './InputField';
import { useAuthStore } from '../../store/useAuthStore';


const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.password) {
      alert('Please fill out all fields.');
      return;
    }
    signup(formData);
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

export default AuthForm;
