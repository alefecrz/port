import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0rem 4rem 4rem 4rem ;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #F9F9F9;
  justify-content: center;
  justify-items: center;

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
      height: auto;
      display: flex;
      padding: 0rem 2rem 2rem 2rem ;
      flex-direction: column;

      * {
        justify-self: center;
        align-self: center;
      }
  }
`;

export const Text = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 32px;
    color: #0D1C26;
  }

  p {
    font-size: 16px;
    margin-top: 2rem;
    color: #2C4459;
  }

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
    h1 {
        text-align: center;
    }
  }
`;

export const Image = styled.div`
  justify-self: center;
  align-self: center;

  img {
    width: 25rem;
  }

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
    display: none;
  }
`;
