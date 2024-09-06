import styled, { css } from 'styled-components'

const glassEffect = css`
  background: ${({ theme }) => theme.colors.quaternary60};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${({ theme }) => `1px solid ${theme.colors.quaternary60}`};
`

export const Container = styled.header`
  width: 100%;
  overflow-x: hidden;
  height: 5.25rem;
  ${glassEffect}
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
`

export const Image = styled.img`
  margin-left: 3rem;
`
