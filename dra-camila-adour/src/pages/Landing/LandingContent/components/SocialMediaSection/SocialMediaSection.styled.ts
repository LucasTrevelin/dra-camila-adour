import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ButtonsContainer = styled(motion.section)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: wrap;
  width: 100%;
  row-gap: 2rem;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  text-align: center;
  column-gap: 1rem;
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`
