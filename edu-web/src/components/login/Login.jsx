import React, { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import Back from '../common/back/loginback';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const authenticateUser = () => {
    // Simulate authentication by checking the provided credentials
    if (username === 'admin' && password === 'password' && role === 'teacher') {
      return true; // Authentication successful for teacher
    } else if (username === 'student' && password === 'password' && role === 'student') {
      return true; // Authentication successful for student
    } else {
      return false; // Authentication failed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser()) {
      if (role === 'teacher') {
        history.push('/teacher-dashboard');
      } else {
        history.push('/student-dashboard');
      }
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='log'>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={handleRoleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
        <div className='buttons'>
          <button type="submit">Login</button>
          <button type="submit"><Link to="/signup"><span>SignUp</span></Link></button>
        </div>
      </form>
    <Back title = " "/>
    </div>
  );
};

export default Login;