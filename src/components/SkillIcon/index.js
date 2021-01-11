import React from 'react';
import { Conteiner } from './style';

const SkillIcon = ({ background: Background, width, fill, icon: Icon, title,...rest}) => (
  <Conteiner {...rest}>
    { Background &&
      <Background
        className="bg"
        width={width}
        fill={fill}
      /> }
    { Icon &&
      <Icon className="icon"/> }
      <h1>{title}</h1>
  </Conteiner>
);

export default SkillIcon;
