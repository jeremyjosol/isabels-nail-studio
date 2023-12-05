import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <h2>Follow our Instagram</h2>
      <div className="social-icons">
        <a href="https://www.instagram.com/nails.tubbytoast" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
