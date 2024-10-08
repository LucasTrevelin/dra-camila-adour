import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

const NormalDevicesProps = css`
  @media screen and (${devices.sm}) {
    display: none;
  }
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled(motion.section)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  column-gap: 3rem;
  border-radius: 1.5rem;
  @media screen and (${devices.sm}) {
    flex-direction: column;
    row-gap: 3rem;
  }
  flex: 1;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 1rem;
  text-align: left;
  @media screen and (${devices.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }
`

export const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (${devices.sm}) {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled(motion.img)`
  width: 80%;
  ${NormalDevicesProps}
`

export const SmallLogo = styled(motion.img)`
  display: none;
  @media screen and (${devices.sm}) {
    display: flex;
    width: 50%;
  }
`

export const Image = styled(motion.img)`
  width: 50%;
  ${NormalDevicesProps}
`

export const SmallScreenImage = styled(motion.img)`
  display: none;
  @media screen and (${devices.sm}) {
    display: flex;
  }
`

export const ContainerBorderBottom = styled.div`
  width: 100vw;
  height: 2.18rem;
  background-image: ${({ theme }) => theme.colors.borderBottomGradient};
  padding-bottom: 2rem;
  margin-bottom: 8rem;
  @media screen and (${devices.sm}) {
    display: flex;
    margin-bottom: 4rem;
  }
`
