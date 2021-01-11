import React from 'react';
import { Conteiner, Text, Image } from './style';

import profileImg from '../../assets/img/img-profile.png'

const Aboutme = () => (
  <Conteiner>
    <Image>
      <img src={ profileImg } alt="" />
    </Image>
    <Text>
      <h1>Sobre</h1>
      <p>
        Sempre adorei tecnologia, meu primeiro contato foi aos 10 anos quando ganhei um computador antigo com Windows 95 foi por ele e uma internet discada onde a descoberta desse mundo digital aconteceu.
      </p>
      <p>
        Hoje estou me graduando em Engenharia da Computação na Escola Politécnica de Pernambuco.
      </p>
      <p>
        Possuo 8 anos de experiência com programação e 3 anos de mercado.
      </p>
      <p>
        Minhas princiais atividades são no desenvolvimento de softwares Backend (API, integrações, conexão com banco de dados), Frontend ( estilização, interfaces WEB e Mobile) e também no design (criação de Layout, prototipação e experiência de usuário).
      </p>
      <p>
        Sou apaixonado pelo o que faço e os desafios me motivam todos os dias.
      </p>
      <p>
        Acredito que compartilhar conhecimento e ter boa comunicação são fundamentais para alcançar soluções de sucesso.
      </p>
    </Text>

  </Conteiner>
);

export default Aboutme;
