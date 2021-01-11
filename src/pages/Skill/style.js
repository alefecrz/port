import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  grid-gap:30px;
  display: grid;
  padding:30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;

  background-color: #170019;

  /* h1 {
    font-size: 32px;
    color: #F9F9F9;
  } */
`;

export const Card = styled.div`
  width: 300px;
  margin: 10px;
  background: #F9F9F9;
  border-radius: 10px;
  display: grid;
  padding-bottom: 4rem;
`;

export const Item = styled.div`
  margin: 2rem 2rem 0rem 2rem;
  display: flex;
  justify-content: flex-start;

  img {
    margin-right: 2rem;
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #2C4459;
    font-weight: 100;
  }
`;
