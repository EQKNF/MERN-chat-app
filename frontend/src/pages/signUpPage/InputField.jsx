import React from 'react';
import { EyeOff, Eye } from 'lucide-react';

const InputField = ({ label, type, placeholder, icon: Icon, value, name, onChange, showPasswordToggle, onToggle }) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">{label}</span>
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="size-5 text-base-content/40" />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full pl-10"
        value={value}
        onChange={onChange}
      />
      {showPasswordToggle && (
        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={onToggle}>
          {type === "password" ? <Eye className="size-5 text-base-content/40" /> : <EyeOff className="size-5 text-base-content/40" />}
        </button>
      )}
    </div>
  </div>
);

export default InputField;
