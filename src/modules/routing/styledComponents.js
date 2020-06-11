import { createGlobalStyle } from 'styled-components';

const globalFontSize = 14;

export const GlobalStyles = createGlobalStyle`
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  body {
    margin: 0;
    font-family: Arial;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    user-select: none;
    direction: ${props => props.direction};
  }
  
  button {
    font-family: inherit;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    border: none;
    outline: none;
  }
  
  input {
    font-family: inherit;
    border: none;
    outline: none;
  }

  textarea{
    font-family: inherit;
    border: none;
    outline: none;
  }
`;