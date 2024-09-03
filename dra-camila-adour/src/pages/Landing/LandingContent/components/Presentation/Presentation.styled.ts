import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Image = styled.img`
  width: 50%;
  aspect-ratio: 1.6/1;
`
