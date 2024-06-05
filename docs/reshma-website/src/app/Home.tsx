// src/app/Home.tsx

import React, { useState } from 'react';

const Home: React.FC = () => {
  // Define state to store the color of the text
  const [textColor, setTextColor] = useState<string>('black');

  // Function to change the color of the text to blue on mouseover
  const handleMouseOver = () => {
    setTextColor('blue');
  };

  // Function to change the color of the text back to black on mouseout
  const handleMouseOut = () => {
    setTextColor('black');
  };

  return (
    <div>
      {/* Display "Reshma's Website" as an h2 with dynamic text color */}
      <h2
        style={{ color: textColor }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Reshma's Website
      </h2>
    </div>
  );
};

export default Home;