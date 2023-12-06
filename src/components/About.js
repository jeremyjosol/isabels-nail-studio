import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaHeart } from "react-icons/fa";

const About = () => {
  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const toggleDetails = () => {
    setDetailsVisibility(!isDetailsVisible);
  };

  return (
    <section className="about">
      <p>
      Hi, my name is Isabel!
      <br /> I'm a PDX-based licensed manicurist 
      <br />specializing in Korean and Japanese
      <br />
      <span className='light'>gel extensions, soft gel overlays, & gel nail art.</span></p>
      
      <p>For consultations, inquiries, or to book an appointment with me, please contact me on Instagram or the provided contact form. Appointment availability is currently limited but I will try my best to work with you.</p>

      <p>There is a <strong>non-refundable</strong> deposit of $25 that goes towards the total cost of your service.</p>

      <button className="btn btn-info btn-sm toggle-button" onClick={toggleDetails}>
        {isDetailsVisible ? <FiChevronUp /> : <FiChevronDown />}
        {isDetailsVisible ? 'Less' : 'More'}
      </button>
      {isDetailsVisible && (
        <div className="details">
          <p className='follow-up'>Once your appointment is confirmed, please expect a follow-up confirmation message with specific details about my private studio located in SE Portland.
          <br />
          <br />
          Thank you. <FaHeart className='icons' /> </p>
        </div>
      )}
    </section>
  );
};

export default About;
