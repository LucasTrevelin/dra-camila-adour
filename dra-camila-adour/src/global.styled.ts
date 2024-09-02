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

html,
body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}`

//Global colors
export const theme = {
  colors: {
    primary: '#C09290',
    secondary: '#DB9B90',
    background: '#EFE3E5',
    tertiary: '#ECE0E0',
    quaternary: '#F5EFEF',
    white: '#FFFFFF',
    black: '#999999'
  },
  heights: { header: '5.25rem' }
}
