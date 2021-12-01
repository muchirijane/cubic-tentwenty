import styled, { createGlobalStyles } from 'styled-components'

const GlobalStyles = createGlobalStyles`
*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

:root{
  --colour-primary: #E9DDCF;
  --colour-text: #000;
  --colour-secondary: #07424D;

}
body{
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.3px;
  font-weight: 400;
  background-color: var(--colour-secondary);
  color: var(--colour-text);

}
`
export default GlobalStyles
