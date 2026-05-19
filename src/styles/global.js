import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* 🌟 ANTES: #1E192C -> AGORA: Lê do tema */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
