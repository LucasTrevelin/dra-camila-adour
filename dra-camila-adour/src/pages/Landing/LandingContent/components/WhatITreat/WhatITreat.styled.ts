import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 5rem;
  width: 100%;

  padding-top: 15.625rem;
  margin-top: -15.625rem;

  @media screen and (${devices.sm}) {
    row-gap: 2.5rem;
  }
`

export const ArticleWrapper = styled(motion.article)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: center;
  flex-wrap: wrap-reverse;

  @media screen and (${devices.sm}) {
    flex-direction: column;
    justify-content: center;
    column-gap: 1rem;
  }
`

export const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled(motion.img)`
  @media screen and (${devices.sm}) {
    aspect-ratio: 0.9/1;
    width: 9.375rem;
  }
`

export const CenterImage = styled(motion.img)`
  @media screen and (${devices.sm}) {
    aspect-ratio: 1/1;
    width: 1rem;
  }
`
