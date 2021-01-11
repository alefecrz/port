import React from 'react';
import { Conteiner, Content, Text, Icons, Down } from './style';

import SocialIcon from '../../components/SocialIcon';

import logoImg from '../../assets/img/logo.svg'

import githubIcon from '../../assets/icons/icon-github.svg'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import linkedinIcon from '../../assets/icons/icon-linkedin.svg'
import mauseIcon from '../../assets/icons/icon-mause.svg'

const Home = () => (
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
        <SocialIcon
          target="_blanc"
          icon={githubIcon}
          alt="GitHub"
          href="https://github.com/alefecrz"
        />
        <SocialIcon
          target="_blanc"
          icon={linkedinIcon}
          alt="LinkedIN"
          href="https://www.linkedin.com/in/%C3%A1lefe-cruz-27a64918a/"
        />
        <SocialIcon
          target="_blanc"
          icon={facebookIcon}
          alt="Facebook"
          href="https://www.facebook.com/alefe.cruz"
        />
          <SocialIcon
          target="_blanc"
          icon={instagramIcon}
          alt="Instagram"
          href="https://www.instagram.com/alefecrz/"
        />
      </Icons>
      <Down>
        <img src={mauseIcon} alt="" />
        <p>SCROLL DOWN</p>
      </Down>
    </Content>
  </Conteiner>
);

export default Home;
