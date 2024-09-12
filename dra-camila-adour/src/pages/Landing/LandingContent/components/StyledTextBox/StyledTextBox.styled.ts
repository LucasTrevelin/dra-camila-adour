import styled from 'styled-components'
import { TDecorativeBoxCoordinates } from './StyledTextBox.types'
import { motion } from 'framer-motion'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding-top: 15.625rem;
  margin-top: -15.625rem;

  @media screen and (${devices.sm}) {
    flex-direction: column;
    row-gap: 7rem;
  }
`

export const AuxContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 4;

  @media screen and (${devices.sm}) {
    display: none;
  }
`
export const SmallScreensAuxContainer = styled(motion.div)`
  display: none;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 4;

  @media screen and (${devices.sm}) {
    display: flex;
  }
`

export const DecorativeBox = styled(motion.div)<TDecorativeBoxCoordinates>`
  width: 14rem;
  aspect-ratio: 1.5/1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  position: absolute;
  top: ${({ $coordinates }) => `${$coordinates.$top}rem`};
  bottom: ${({ $coordinates }) => `${$coordinates.$bottom}rem`};
  left: ${({ $coordinates }) => `${$coordinates.$left}rem`};
  right: ${({ $coordinates }) => `${$coordinates.$right}rem`};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  @media screen and (${devices.sm}) {
    width: 6rem;
    top: ${({ $coordinates }) => `${Number($coordinates.$top) + 0.5}rem`};
    bottom: ${({ $coordinates }) => `${Number($coordinates.$bottom) + 0.5}rem`};
    left: ${({ $coordinates }) => `${Number($coordinates.$left) + 0.5}rem`};
    right: ${({ $coordinates }) => `${Number($coordinates.$right) + 0.5}rem`};
  }
`

export const TextContent = styled.p`
  line-height: 1.625rem;
  max-width: 43rem;
  text-indent: 1rem;
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  text-align: justify;
  padding: 1rem 2rem;

  @media screen and (${devices.sm}) {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`

export const Emphasize = styled.span<{ $hasBiggerFont?: boolean }>`
  font-size: ${({ $hasBiggerFont }) => $hasBiggerFont && '1.25rem'};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media screen and (${devices.sm}) {
    font-size: ${({ $hasBiggerFont }) => $hasBiggerFont && '0.875rem'};
  }
`
