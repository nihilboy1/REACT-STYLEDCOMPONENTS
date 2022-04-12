import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  border: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}


body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}

#root, body {
  position: relative;
  background-color: #CEE0F6 ;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99vh;
  width: 99vw;
}


`
