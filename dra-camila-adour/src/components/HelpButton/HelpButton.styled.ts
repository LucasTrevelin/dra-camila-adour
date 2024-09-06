import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ButtonContent = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-align: center;
  column-gap: 1rem;
  color: inherit;
  text-decoration: none;
`

export const Image = styled.img`
  aspect-ratio: 1/1;
  width: 25px;
`
