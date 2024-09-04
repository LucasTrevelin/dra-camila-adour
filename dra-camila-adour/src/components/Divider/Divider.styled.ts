import styled from 'styled-components'

export const Container = styled.div`
  width: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  height: 50px;
`
