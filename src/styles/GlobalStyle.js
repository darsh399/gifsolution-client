import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    margin: 0;
    transition: background 0.3s ease;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    body {
      font-size: 15px;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
