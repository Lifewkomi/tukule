import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/cinzel";


const Globals = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      overflow: hidden;
    }

    a{
      text-decoration: none;
       color: inherit
    }
    
    /* h1,h2,h3,h4,h5,h6{
      font-size: 1rem;
      font-family: ${props => props.theme.Font1};
    } */
`;

export default Globals;
