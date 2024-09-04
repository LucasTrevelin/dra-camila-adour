import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Box = styled.div<{
  $borderRadius?: CSSProperties['borderRadius']
}>`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow-wrap: break-word;
  z-index: 4;
  position: relative;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);
  & > pre {
    white-space: pre-wrap;
    word-wrap: break-word; /* For older browsers */
    overflow-wrap: break-word; /* Modern equivalent */
  }
`

export const Content = styled.p`
  z-index: 5;
`
