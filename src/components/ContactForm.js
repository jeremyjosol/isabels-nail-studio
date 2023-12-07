import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from './../firebase.js';
import { CgSmile } from "react-icons/cg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
  
    try {
      const collectionRef = collection(db, 'clients');
      await addDoc(collectionRef, { 
        ...formData, 
        timestamp: serverTimestamp(), 
      });
      setMessageSent(true);
    } catch (error) {
    }
  };

  return (
    <section className="contact-form container mt-1">
      <h3>
        <AiOutlineMail className="icons" /> Contact
      </h3>
      <hr className='line' />
      <br />
      {messageSent ? (
        <p>
          Your message has been sent! I appreciate your patience and will get back to you as soon as possible. <CgSmile className='icons' />
        </p>
      ) : (
      <form onSubmit={(event) => handleSubmit(event, formData)}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Phone Number (optional)"
            type="phone-number"
            name="phone-number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Questions, comments, concerns...?"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-info submit"
        >
          SUBMIT
        </button>
      </form>
      )}
    </section>
  );
};

export default ContactForm;