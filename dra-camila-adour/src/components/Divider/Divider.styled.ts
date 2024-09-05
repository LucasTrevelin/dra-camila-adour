import styled from 'styled-components'

export const Container = styled.div`
  width: 0;
  padding: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  height: 60%;
  margin: 0 -5rem;
`
