import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    background: #ffffff;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-size: 1.8rem;
    overflow-x: hidden;
  }
  button {
    font: inherit;
    background: none;
    border: 0;
    outline: none;
    &:hover {
      outline: none;
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  input {
    padding: 0;
    border-radius: 0;
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      pointer-events: none;
    }
    &::-webkit-contacts-auto-fill-button {
      display: none;
      position: absolute;
      right: 0;
      visibility: hidden;
      pointer-events: none;
    }
    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      display: none;
      pointer-events: none;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px #ffffff;
    }
    &:required {
      box-shadow: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyles };
