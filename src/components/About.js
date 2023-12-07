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
      <hr className='line' />
      <br />
      <p>
      Hi, my name is Isabel!
      <br /> I'm a PDX based licensed manicurist 
      <br />specializing in Korean and Japanese
      <br />
      <span className='light'>gel extensions, soft gel overlays, & gel nail art.</span></p>
      
      <p>For consultations or inquiries/bookings,
      <br />please contact me on either
      <br /> my Instagram or contact form.</p>

      <p>There is a <strong>non-refundable</strong> deposit of $25 
      <br />that goes towards the total price of your service.</p>

      <button className="btn btn-info btn-sm toggle-button" onClick={toggleDetails}>
        {isDetailsVisible ? <FiChevronUp /> : <FiChevronDown />}
        {isDetailsVisible ? 'LESS' : 'MORE'}
      </button>
      {isDetailsVisible && (
        <div className="details">
          <p className='follow-up'>Appointment availability is currently limited 
          <br /> but I will try my best to work with you.
          <br />
          <br />Once your appointment is confirmed, please expect a follow-up confirmation message with specific details about my private studio located in SE Portland.
          <br />
          <br />
          Thank you. <FaHeart className='icons' /> </p>
        </div>
      )}
    </section>
  );
};

export default About;
