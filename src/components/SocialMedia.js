import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { InstagramEmbed } from 'react-social-media-embed';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <hr className='line' />
      <a
        href="https://www.instagram.com/nails.tubbytoast"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className='instagram'>
          <FaInstagram className='icons' /> Instagram
        </h3>
      </a>
      <hr className='line' />
      <br />
      <div className='feed'>
        <InstagramEmbed url="https://www.instagram.com/nails.tubbytoast" width={328} />
      </div>
    </section>
  );
};

export default SocialMedia;

