import React, { Component } from 'react';
import { Conteiner, Content, Text, Icons, Down } from './style';

import logoImg from '../../assets/img/logo.svg'

import githubIcon from '../../assets/icons/icon-github.svg'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import linkedinIcon from '../../assets/icons/icon-linkedin.svg'
import mauseIcon from '../../assets/icons/icon-mause.svg'

class Home extends Component {
  render() {
    return (
      <Conteiner>
        <Content>
          <div>
            <img src={logoImg} alt="" />
          </div>
          <Text>
            <h1>HI! I'M  <span>ÁLEFE CRUZ</span></h1>
            <p>I AM <span>FULL STACK</span> DEVELOPER</p>
            <button className="button" type="submit">
              Ver Projetos
            </button>
          </Text>
          <Icons>
            <a
              target="_blanc"
              href="https://github.com/alefecrz/">
              <img src={githubIcon} alt="" />
            </a>
            <a
              target="_blanc"
              href="https://www.linkedin.com/in/%C3%A1lefe-cruz-27a64918a/">
              <img src={linkedinIcon} alt="" />

            </a>
            <a
              target="_blanc"
              href="https://www.facebook.com/alefe.cruz">
              <img src={facebookIcon} alt="" />
            </a>
            <a
              target="_blanc"
              href="https://www.instagram.com/alefe.cruz">
              <img src={ instagramIcon } alt=""/>
            </a>
          </Icons>
          <Down>
            <img src={mauseIcon} alt="" />
            <p>SCROLL DOWN</p>
          </Down>
        </Content>
      </Conteiner>
    );
  }
}

export default Home;
