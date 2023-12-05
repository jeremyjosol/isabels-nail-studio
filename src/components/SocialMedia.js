import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { InstagramEmbed } from 'react-social-media-embed';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <br />
        <a
          href="https://www.instagram.com/nails.tubbytoast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className='instagram'><FaInstagram className='icons' /> Instagram </span> |
          <span className='handle'> @nails.tubbytoast</span>
        </a>
        <div className='feed'>
          <InstagramEmbed url="https://www.instagram.com/nails.tubbytoast" width={328} />
        </div>
    </section>
  );
};

export default SocialMedia;

