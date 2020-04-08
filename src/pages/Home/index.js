import React from 'react';

import '../../global.css';
import './style.css';

import Navbar from '../../components/Navbar';
import logoImg from '../../assets/img/logo.svg';

export default function Home() {
  return (
    <>
      <Navbar />  
      <div className="home-conteiner">
        <div className="content">
          <div className="logo">
            <img alt="" src={ logoImg }/>
          </div>
          <div className="text">
            <h1>Álefe Cruz</h1>
            <h5> &#60;Desenvolvedor/&#62;  </h5>
          </div>
        </div>
      </div>
    </>
);
}