import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  min-height: 100vh;
`
