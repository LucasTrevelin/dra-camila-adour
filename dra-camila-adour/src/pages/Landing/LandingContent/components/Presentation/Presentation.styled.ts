import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Container = styled(motion.section)`
  display: flex;
  @media screen and (${devices.sm}) {
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Image = styled(motion.img)`
  width: 50%;
  @media screen and (${devices.sm}) {
    width: 100%;
    display: none;
  }
  aspect-ratio: 1.6/1;
`

export const SmallScreenImage = styled(motion.img)`
  display: none;
  @media screen and (${devices.sm}) {
    display: flex;
  }
`
