import styled, { keyframes} from 'styled-components';
import backgroundImg from '../../assets/img/bg.png';

const blinky = keyframes`
  50% { opacity: 0.0; }
`;

export const Conteiner = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 1030px;
  width:100%;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    & * {
      justify-self: center;
      align-self: center;
    }
  }
`;

export const Text = styled.div`
  margin-top: 3rem;

  @media only screen and (max-width: 768px) {
    & p {
      text-align: center;
    }

    & .button {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h1 {
    font-size: 3rem;
    color: #FFFFFF;

    span {
      color: #EE4540;
    }
  }
  p {
      margin-bottom: 3rem;
      font-size: 1.5rem;
      color: #FFFFFF;

      span {
        color: #EE4540;
      }
    }
`;

export const Icons = styled.div`
  margin-top: 1.5rem;
`;

export const Down = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  margin: 0 auto;
  align-self: end;
  justify-self: center;

  img {
    animation: ${blinky} 2s step-start 1s infinite;
    display: block;
    margin: 0 auto;
  }

  p {
    margin-top: 0.5rem;
    animation: ${blinky} 2s step-start 1s infinite;
  }
`;
