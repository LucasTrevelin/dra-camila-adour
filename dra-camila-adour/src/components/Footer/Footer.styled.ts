import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18rem;
  flex-wrap: wrap;
  flex: 1;
  row-gap: 4rem;
`
export const Image = styled.img`
  aspect-ratio: 2.5/1;
  height: 50%;
  margin-left: 2rem;
`
