import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: #170019;
  h1 {
    font-size: 32px;
    color: #F9F9F9;
  }

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
    height: auto;
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`;

export const Card = styled.div`
  width: 300px;
  background: #F9F9F9;
  border-radius: 10px;
  display: grid;
  padding-bottom: 2rem;
`;

export const Item = styled.div`
  margin: 0.5rem 1rem 0rem 2rem;
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

