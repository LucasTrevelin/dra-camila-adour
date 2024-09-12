import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Container = styled(motion.section)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-flow: wrap;
  width: 100%;
  row-gap: 4rem;
  z-index: 1;

  padding-top: 15.625rem;
  margin-top: -15.625rem;

  @media screen and (${devices.sm}) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
