import styled from 'styled-components';

export const Conteiner = styled.div`
  position: relative;

  @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
  }

  @-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(359deg);
    }
  }

  & .bg {
    animation: rotation 3s infinite linear;;
    -webkit-animation: rotation 3s infinite linear;;
  }
  & .icon {
    position: absolute;
    top: 2rem;
    right: 14.5rem;
    width: 35.2px;
  }
  h1 {
    text-align: center;
    font-size: 20px ;
    color: #2C4459;
    margin-bottom: 1rem;
  }
`;
