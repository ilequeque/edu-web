import React, { useState } from 'react';
import axios from 'axios';
import Back from '../common/back/Back';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/your-backend-url', formData);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Handle success actions or show a success message
    } catch (error) {
      // Handle errors or show an error message
    }
  };


  return (
    <>
      <Back title='Свяжитесь с Нами' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          {/* Left Section */}
          <div className='left row'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450"'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          {/* Right Section */}
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={handleChange}
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={subject}
                onChange={handleChange}
              />
              <textarea
                name='message'
                cols='30'
                rows='10'
                value={message}
                onChange={handleChange}
              >
                Create a message here...
              </textarea>
              <button className='primary-btn' type='submit'>
                SEND MESSAGE
              </button>
          </form>
        <h3>Follow us here</h3>
        <span>FACEBOOK TWITTER INSTAGRAM</span>
      </div>
    </div>
  </section>
</>
);
};

export default Contact;