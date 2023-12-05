import React, { useState } from 'react';

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
      <h2>Contact Tubby Toast</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Name'
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange} />

        <input 
          placeholder='Email'
          type='email' 
          name='email' 
          value={formData.email}
          onChange={handleChange} />

        <textarea 
          placeholder='Custom message'
          name='message' 
          value={formData.message} 
          onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
