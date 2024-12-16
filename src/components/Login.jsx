import React, { useState } from 'react'
import { Form, Link, useNavigate} from 'react-router-dom';
import './Login.css'; 




const Login = () => {
  
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const [error, setError] = useState('');  // State to hold error message
    const [success, setSuccess] = useState('')
    const navigate = useNavigate(); 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Hardcoded credentials for validation
      const validCredentials = {
        email: 'test11@gmail.com',
        password: 'pass123'
      };
     console.log(validCredentials)
      // Check if entered credentials match the valid ones
      if (formData.email === validCredentials.email && formData.password === validCredentials.password) {
        setSuccess('Login successful!');
        setError('');
        localStorage.setItem('userEmail', formData.email);
         localStorage.setItem('userPassword', formData.password);
        navigate('/Products')
      } else {
        setError('Invalid credentials. Please try again.');
        setSuccess('');
      }
      console.log(localStorage)
    };
  
  
    return (
      <div className="login-container">
      <form  onSubmit={handleSubmit}>
        <h2>Login Form</h2>
  
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="form-control" 
            required 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
  
        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="form-control" 
            required 
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
       
      {/* Error or Success Message */}
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
        {/* Submit Button */}
        <button type="submit"  className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
    );
  };
  
  export default Login;