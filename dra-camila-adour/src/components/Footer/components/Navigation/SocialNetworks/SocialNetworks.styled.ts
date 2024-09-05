import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  padding-right: 8rem;
`

export const IconContainers = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  column-gap: 10rem;
  width: 100%;
`
