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
        Entusiasta por tecnologia, obtive meu primeiro contato aos 10 anos. <br />
        Iniciando com criação de sites simples, usando HTML para marcação de texto e ferramentas
        gráficas para criação e edição de imagens como Photoshop e Illustrator.
      </p>
      <p>
        Atualmente, graduando em Engenharia da Computação na Escola Politécnica de Pernambuco,
        possuindo 8 anos de experiência com programação e 3 anos de mercado aplicando tecnicas avançadas
        de desenvolvimento de software como  <strong>versionamento, Arquitetura, Clean Code e Design Pattern</strong>.
      </p>
      <p>
        Princiais atividades no desenvolvimento de softwares são  <strong>Backend</strong> (API, integrações,
        conexão com banco de dados), <strong>Frontend</strong> ( estilização, interfaces WEB e Mobile) e também
        no design com criações de Layout, prototipação e experiência de usuário.
      </p>
      <p>
        Sou apaixonado pelo o que faço e os desafios me motivam todos os dias.<br />
        Acredito que <strong>compartilhar conhecimento</strong> e ter boa <strong>comunicação</strong> são fundamentais
        para alcançar soluções de sucesso.
      </p>
      <p>
      </p>
    </Text>

  </Conteiner>
);

export default Aboutme;
