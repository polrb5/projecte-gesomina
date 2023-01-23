import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: 'Montserrat', sans-serif; */
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    background-color: inherit;
  }
`;

export default GlobalStyle;
