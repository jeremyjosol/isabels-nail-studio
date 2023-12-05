import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <br />
        <a
          href="https://www.instagram.com/nails.tubbytoast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className='icons' /> Instagram |
          <span className='handle'> @nails.tubbytoast</span>
        </a>
    </section>
  );
};

export default SocialMedia;

