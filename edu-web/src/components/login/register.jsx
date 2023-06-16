import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Back from '../common/back/loginback';
import './login.css';
import axios from 'axios';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
  
    const signupData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
      role: role === 'teacher' ? true : false
    };
  
    axios
      .post('http://localhost:8000/api/v1/auths/users/signup', signupData)
      .then((response) => {
        const { access, refresh } = response.data;
  
        console.log('Access Token:', access);
        console.log('Refresh Token:', refresh);
  
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Signup failed. Please try again.');
      });
  };

  return (
    <div className='log'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
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
          <button type="submit">Signup</button>
        </div>
      </form>
      <Back title=" " />
    </div>
  );
};

export default Signup;
