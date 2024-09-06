import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.main`
  width: 65%;
  margin-top: 8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const RegularTitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`
