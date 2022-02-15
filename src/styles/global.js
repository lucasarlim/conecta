import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    overflow: visible;
    font-size: 16px;
    scroll-behavior: smooth;

    *, input, button, p{
      margin: 0;
    }

    @media (max-width: 2560px) {
      font-size: 32px;
    }

    @media (max-width: 1440px){
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
`