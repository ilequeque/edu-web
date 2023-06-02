import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Back from '../common/back/loginback';
import './login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Simulate signup success
    const isSignupSuccessful = true; // Replace with your signup logic result

    if (isSignupSuccessful) {
      // Navigate the user to the login page after successful signup
      history.push('/login');
    } else {
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className='log'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
          <button type="submit">Signup</button>
        </div>
      </form>
    <Back title = " "/>
    </div>
  );
};

export default Signup;
