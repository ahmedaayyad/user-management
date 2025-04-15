// src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';
import '../styles.css';

const UserForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    isActive: false,
    ...(initialData || {}),
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.role) newErrors.role = 'Role is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="UserForm-form">
      <div className="UserForm-field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
        {errors.name && <span className="UserForm-error">{errors.name}</span>}
      </div>
      <div className="UserForm-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
        />
        {errors.email && <span className="UserForm-error">{errors.email}</span>}
      </div>
      <div className="UserForm-field">
        <label>Role</label>
        <select name="role" value={formData.role || 'User'} onChange={handleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
        {errors.role && <span className="UserForm-error">{errors.role}</span>}
      </div>
      <div className="UserForm-field">
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive || false}
            onChange={handleChange}
          />
          Active
        </label>
      </div>
      <div className="UserForm-actions">
        <button type="submit" className="UserForm-submit">
          Submit
        </button>
        <button type="button" onClick={onCancel} className="UserForm-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;