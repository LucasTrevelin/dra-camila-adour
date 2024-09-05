import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  font-family: 'PT Sans', 'Helvetica Neue', sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.black}
}

html,
body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 100%;
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
    black: '#000000',
    gray: '#999999',
    quaternary60: 'rgba(245, 239, 239, 0.6)',
    border30: 'rgba(255, 255, 255, 0.3)',
    whatsappGreen: '#27D366',
    instagramBackground:
      'linear-gradient(35deg, #F9CE34 0%, #EE2A7B 60%, #6228D7 100%)'
  }
}
