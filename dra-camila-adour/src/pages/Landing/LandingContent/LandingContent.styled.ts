import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 8rem;
`

export const PresentationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Image = styled.img``
