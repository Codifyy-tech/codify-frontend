import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus { 
        outline: none !important;
        border-color: ${({ theme }) => theme.colors['brand-blue']};
    }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  button {
    cursor: pointer;
  }
    
  ul {
    list-style: none;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 14px;
    }
  }

`
