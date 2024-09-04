import styled from 'styled-components'
import { TDecorativeBoxCoordinates } from './StyledTextBox.types'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AuxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: aliceblue;
  position: relative;
  z-index: 4;
`

export const DecorativeBox = styled.div<TDecorativeBoxCoordinates>`
  width: 14rem;
  aspect-ratio: 1.5/1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  position: absolute;
  top: ${({ $coordinates }) => $coordinates.$top};
  bottom: ${({ $coordinates }) => $coordinates.$bottom};
  left: ${({ $coordinates }) => $coordinates.$left};
  right: ${({ $coordinates }) => $coordinates.$right};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export const TextContent = styled.p`
  line-height: 26px;
  max-width: 43rem;
  text-indent: 1rem;
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  text-align: justify;
  padding: 1rem 2rem;
`

export const Emphasize = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`
