import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Centralizer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15.625rem;
  margin-top: -15.625rem;
`

export const ArticleSection = styled.section`
  max-width: 80rem;
  @media screen and (${devices.sm}) {
    max-width: 20rem;
  }
`

export const SubtopicContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${devices.sm}) {
    flex-direction: column;
  }
`
export const TextContent = styled.div<{ $maxWidth?: string }>`
  line-height: 30px;
  max-width: ${({ $maxWidth }) => $maxWidth};
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  text-align: justify;
  padding: 1rem 2rem;

  @media screen and (${devices.sm}) {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  ul {
    list-style: none;
  }
  li {
    line-height: 30px; /* Set consistent line height */
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;
    text-align: start;

    @media screen and (${devices.sm}) {
      line-height: 1rem;
    }

    & > svg {
      padding-top: 0.3rem;

      @media screen and (${devices.sm}) {
        padding-top: 1.2rem;
        height: 0.625rem;
        width: 0.625rem;
        min-height: 0.625rem;
        min-width: 0.625rem;
      }
    }
  }
`

export const SubtopicTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`

export const Image = styled(motion.img)`
  aspect-ratio: 0.91/1;
  width: 430px;
  @media screen {
    width: 19rem;
  }
`
