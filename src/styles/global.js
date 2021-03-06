import { createGlobalStyle } from 'styled-components';

import backgroundButton from '../assets/icons/button.svg';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  :root {
    font-size: 16px;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background:  #fff;
    color: #898989;

    &::-webkit-scrollbar {
      width: 0.25rem;

    }
    &::-webkit-scrollbar-track {
      background: #2D132C;

    }
    &::-webkit-scrollbar-thumb {
      background: #C72C41;
    }
  }

  input, button, textarea {
    font: 400 1.3rem Roboto, sans-serif;
  }

  button {
   cursor: pointer;
  }

  form input, form textarea {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    resize: vertical;
    min-height: 140px;
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 208px;
    height: 64px;
    background:transparent;
    color: #fff;
    border: 0;
    font-weight: 400;
    margin-top: 19px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: transform 0.2s;
    position: relative;
    background-image: url(${backgroundButton});
    background-repeat: no-repeat;
    background-position: 50% 30%;
  }

  .button:hover {
    transform: scale(1.1);
  }
`;
