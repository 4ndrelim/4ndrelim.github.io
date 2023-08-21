import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        {about.split('\n').map((line, idx, array) => (idx + 1 === array.length ? 
          <p>{line}</p> : 
          <div>
            <p>{line}</p>
            <br></br>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
