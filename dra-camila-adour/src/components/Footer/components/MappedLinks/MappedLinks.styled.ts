import styled from 'styled-components'

export const LinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  row-gap: 1rem;
  text-align: center;
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
