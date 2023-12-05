import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const About = () => {
  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const toggleDetails = () => {
    setDetailsVisibility(!isDetailsVisible);
  };

  return (
    <section className="about">
      <h2>About Tubby Toast</h2>
      <p>
        Custom Korean/Japanese manicures based in Portland, Oregon.
      </p>
    </section>
  );
};

export default About;
