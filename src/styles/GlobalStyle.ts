import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
      --black: #000;
      --gray: #ccc;
    }

    @media(max-width: 1080px){
      html {
        font-size: 93.75%;
      }
    }

    @media(max-width: 720px){
      html {
        font-size: 87.5%;
      }
    }

    body {
      color: var(--black)
    }

    body, input, textarea, select, button {
      font: 400 1rem helvetica, arial, sans-serif;
    }

    button {
      cursor: pointer;
    }
`;
