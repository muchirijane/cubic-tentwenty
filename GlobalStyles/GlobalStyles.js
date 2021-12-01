import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
  --colour-black: #000;
  --colour-secondary: #07424D;
  --colour-white: #fff;

}
body{
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.3px;
  font-weight: 400;
  background-color: var(--colour-primary);
  color: var(--colour-black);

}
`
export default GlobalStyles
