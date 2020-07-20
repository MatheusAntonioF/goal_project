import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    font-family: 'Nunito', sans-serif;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  button {
    background: none;
    outline: 0;
    border: 0;
  }
 
  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
   width: 2px;

  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #4d4d70; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #4d4d70; 
  }
`;
