import styled from 'styled-components';

export const Conteiner = styled.a`
  img {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
