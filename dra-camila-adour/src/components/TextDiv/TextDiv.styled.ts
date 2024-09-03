import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Box = styled.div<{
  $borderRadius?: CSSProperties['borderRadius']
}>`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow-wrap: break-word;
  & > pre {
    white-space: pre-wrap;
    word-wrap: break-word; /* For older browsers */
    overflow-wrap: break-word; /* Modern equivalent */
  }
`

export const Content = styled.p`
  z-index: 2;
`
