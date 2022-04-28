import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(255, 1, 1, 0.5);
  border-radius: 9px;
  }

  :root {
  --color-bg: #39BDE3;
  --color-bg-varient: #378EBE;
  --color-primary: #4db5ff;
  --color-primary-varient: rgba(77, 181, 255, 0.4);
  --color-white: #fff;
  --color-bluedark: #04253D;
  --color-bluedark-varient:rgba(4, 37, 61, 0.9);
  --color-light: rgba(255, 255, 255, 0.5);
  --color-canaryyellow:#F5D667;
  --color-darkred:#9A0C0C;

  --transition:transition: all 500ms ease;

}

html {
  font-size: 62.5%;
  
  }

body {
  font-family: 'Poppins', sans-serif;
  background: var(--color-bg);
  color: var(--color-bluedark);
  line-height: 1.6;
  
}

a, button{
  cursor: pointer;
}

a{
  color:var(--color-white);
  transition: var(--transition);
}

a:hover, button:hover{
  color:var(--color-primary);
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 500;
}

h1 {
  font-size: 3.6rem;
}

small{
font-size: 1.2rem;
}
img{
  display:block;
  width: 100%;
  object-fit: cover;
}

`;
export default GlobalStyles;
