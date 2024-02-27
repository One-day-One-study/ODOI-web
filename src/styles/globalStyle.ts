import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Righteous";
    src: url(/fonts/Righteous-Regular.ttf);
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(/fonts/Pretendard-Regular.woff2);
  }
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
`
