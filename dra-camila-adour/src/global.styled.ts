import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  font-family: 'PT Sans', 'Helvetica Neue', sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  text-align: center;
}

body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  overflow-y: auto;
}`

//Global colors
export const theme = {
  primary: '#C09290',
  secondary: '#DB9B90'
}
