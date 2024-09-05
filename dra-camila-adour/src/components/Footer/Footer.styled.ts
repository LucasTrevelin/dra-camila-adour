import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: flex-start;
`
export const Image = styled.img`
  aspect-ratio: 2.5/1;
  height: 7rem;
  margin-left: 2rem;
`
