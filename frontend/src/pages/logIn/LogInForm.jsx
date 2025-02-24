import React, { useState } from 'react';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import InputField from '../../components/InputField';


const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const {login, isLoggingIn} = useAuthStore()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField label="Email" type="email" placeholder="Email" icon={Mail} value={formData.email} name="email" onChange={handleChange} />
      <InputField label="Password" type={showPassword ? 'text' : 'password'} placeholder="Password" icon={Lock} value={formData.password} name="password" onChange={handleChange} showPasswordToggle onToggle={() => setShowPassword(!showPassword)} />
      
      <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
        {isLoggingIn ? (
          <>
            <Loader2 className="size-5 text-white animate-spin" /> Loading...
          </>
        ) : (
          'Sign in'
        )}
      </button>
    </form>
  );
};

export default LogInForm;
