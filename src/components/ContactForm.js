import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { collection, addDoc } from 'firebase/firestore';
import db from './../firebase.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
    console.log('Form Data before submission:', formData);
  
    try {
      console.log('formData:', { ...formData });
      const collectionRef = collection(db, 'clients');
      console.log('Collection Reference:', collectionRef);
      const docRef = await addDoc(collectionRef, { ...formData });
      console.log('Document ID:', docRef.id);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-form container mt-3">
      <h3>
        <AiOutlineMail className="icons" /> Contact
      </h3>
      <form onSubmit={(event) => handleSubmit(event, formData)}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Custom message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-info submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;