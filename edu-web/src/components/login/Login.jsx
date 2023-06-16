import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Back from '../common/back/loginback';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/v1/auths/users/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        const { access, refresh } = response.data;

        // Store the access and refresh tokens in localStorage or a secure storage mechanism
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        // Redirect the user to the desired page upon successful login
        window.location.href = '/student-dashboard';
      })
      .catch((error) => {
        setErrorMessage('Invalid credentials. Please try again.');
        console.log(error);
      });
  };

  return (
    <div className='log'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <button type='submit'>Login</button>
      </form>
      <p className='check'>Don't have an account? <a href="/signup">Sign up</a></p>
      <Back title = " "/>
    </div>
  );
};

export default Login;
