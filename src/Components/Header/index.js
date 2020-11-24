import React, { useState, useEffect } from 'react';

import './header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const updateSize = () => {
    setIsMobile(window.innerWidth < 1000);
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div className="header">
      <img
        src={isMobile ? './images/bg-header-mobile.svg' : './images/bg-header-desktop.svg'}
        alt="header"
      />
    </div>
  );
};

export default Header;
