import React, { Component } from 'react';
import './style.css';

import logoImg from '../../assets/img/logo.svg'

import githubIcon from '../../assets/icons/icon-github.svg'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
// import instagramIcon from '../../assets/icons/icon-instagram.svg'
import linkedinIcon from '../../assets/icons/icon-linkedin.svg'
import mauseIcon from '../../assets/icons/icon-mause.svg'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div>
                    <img src={ logoImg } alt=""/>
                </div>
                <div className="text">
                    <div>
                        <h1>HI! I'M  <span>ÁLEFE CRUZ</span></h1>
                        <p>I AM <span>FULL STACK</span> DEVELOPER</p>
                    </div>
                    <button className="button" type="submit">
                        Ver Projetos
                    </button>
                </div>
                <div className="icons">
                    <a 
                        target="_blanc" 
                        href="https://github.com/alefecrz/">
                            <img src={ githubIcon } alt=""/>
                    </a>
                    <a 
                        target="_blanc" 
                        href="https://www.linkedin.com/in/%C3%A1lefe-cruz-27a64918a/">
                            <img src={ linkedinIcon } alt=""/>      

                    </a>
                    <a 
                        target="_blanc" 
                        href="https://www.facebook.com/alefe.cruz">
                        <img src={ facebookIcon } alt=""/>
                    </a>
                    {/* <a 
                        target="_blanc" 
                        href="#">
                        <img src={ instagramIcon } alt=""/>
                    </a> */}
                </div>
                <div className="down">
                    <img src={ mauseIcon } alt=""/>
                    <p>SCROLL DOWN</p>
                </div>
            </div>
        );
    }
}

export default Home;