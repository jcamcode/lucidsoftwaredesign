import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-size: 100%;
        
    }
    body {
         font-family: 'Lato', sans-serif;
         font-size: 16px;
         background: white;
         color: ${(props) => props.theme.colors.tertiary};
    }
    a {
        text-decoration: none; 
    }
    @media (min-width: 860px) {
    font-size: 18px;
  }
`


export default GlobalStyle;