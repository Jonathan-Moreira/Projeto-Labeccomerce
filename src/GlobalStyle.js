import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;
    }

h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--green);
}


h2, h3 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--yellow);
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background:var(--deep-blue);
    color: var(--soft-white);
   
    
}

*{
    margin: 0;
    padding: 0;
    border-bottom:silver
}
`

