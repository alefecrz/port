import React from 'react';

import './style.css';

// import bgMenuImg from '../../assets/icons/bg-menu.svg';
import iconMenuImg from '../../assets/icons/menu-icon.svg';

export default function Navbar() {
  return (
      <div className="navbar">
        <div className="bg"  >
          {/* <img alt="" src={ bgMenuImg }/> */}
        </div>
        <div className="icon">
          <img alt="" src={ iconMenuImg }/>
        </div>
      </div>
  );
}