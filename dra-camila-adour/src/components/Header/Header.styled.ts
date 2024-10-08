import styled, { css } from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

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
  flex: 1;
  z-index: 30;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media screen and (${devices.sm}) {
    justify-content: space-between;
  }
`

export const Image = styled.img`
  aspect-ratio: 8.3/1;
  width: 250px;
  margin-left: 2rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

export const SmallScreenImage = styled.img`
  aspect-ratio: 1.18/1;
  width: 30px;
  display: none;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media screen and (${devices.sm}) {
    display: flex;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`
