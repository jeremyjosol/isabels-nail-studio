import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Test data:', formData);
  };

  return (
    <section className='contact-form'>
      <h3><AiOutlineMail className='icons' /> Contact</h3>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Name'
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange} />
        <br />
        <input 
          placeholder='Email'
          type='email' 
          name='email' 
          value={formData.email}
          onChange={handleChange} />
        <br />
        <textarea 
          placeholder='Custom message'
          name='message' 
          value={formData.message} 
          onChange={handleChange} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
