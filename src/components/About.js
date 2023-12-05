import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const About = () => {
  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const toggleDetails = () => {
    setDetailsVisibility(!isDetailsVisible);
  };

  return (
    <section className="about">
      <span className='titles'>
        <h2>About Tubby Toast</h2>
      </span>
      <p>
        Custom Korean/Japanese manicures based in Portland, Oregon.
      </p>
      <button className="toggle-button" onClick={toggleDetails}>
        {isDetailsVisible ? <FiChevronUp /> : <FiChevronDown />}
        {isDetailsVisible ? 'Less' : 'More'}
      </button>
      {isDetailsVisible && (
        <div className="details">
          <p>Specialized in various nail techniques, including nail art, extensions, and more.</p>
        </div>
      )}
    </section>
  );
};

export default About;
