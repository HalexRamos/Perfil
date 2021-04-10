import { createGlobalStyle } from 'styled-components';

import Background from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #003662 url(${Background});
    position: relative;
    height: 100vh;
    width: 100vw;
    background-size: cover;
  }

  #root {
    position: absolute;
    top: 15%;
    transform: translateY(-50%);
    right: 50%;
    transform: translateX(50%);
  }

  button {
    cursor: pointer;
  }
`;
