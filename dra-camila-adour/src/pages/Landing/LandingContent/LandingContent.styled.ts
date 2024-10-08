import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../helpers/breakpoints.helpers'

export const Container = styled.main`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (${devices.sm}) {
    width: 90%;
  }
`

export const RegularTitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`

export const ColorFillContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`
