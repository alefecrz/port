import React from 'react';
import { Conteiner } from './style';

const SocialIcon = ({ icon, alt, ...rest}) => (
  <Conteiner {...rest}>
    <img src={icon} alt={alt} />
  </Conteiner>
);

export default SocialIcon;
