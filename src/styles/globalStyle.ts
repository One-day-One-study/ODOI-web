import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html, body { 
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  ul, ol {
    list-style: none;
  } 

  button {
    all: unset;
    cursor: pointer;
  }
`;
