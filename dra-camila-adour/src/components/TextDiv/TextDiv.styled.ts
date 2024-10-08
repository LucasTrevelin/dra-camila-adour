import styled from 'styled-components'
import { TBoxProps } from './TextDiv.types'
import { motion } from 'framer-motion'
import { devices } from '../../helpers/breakpoints.helpers'

export const Box = styled(motion.div)<TBoxProps>`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow-wrap: break-word;
  z-index: 4;
  position: relative;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);
  border: ${({ hasBorder, theme }) =>
    hasBorder && `2px solid ${theme.colors.black}`};
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  height: 100%;
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
`

export const WaterMarkContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`

export const WaterMark = styled.img`
  aspect-ratio: 1/1;
  width: 20rem;

  @media screen and (${devices.sm}) {
    width: 12rem;
  }
`

export const Content = styled.p`
  z-index: 10;
`
