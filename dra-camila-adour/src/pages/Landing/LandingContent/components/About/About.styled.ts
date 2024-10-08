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
    max-width: 100%;
  }
`

export const SubtopicContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (${devices.sm}) {
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
  aspect-ratio: 0.83/1;
  width: 20rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10;
  margin-right: 1rem;
  @media screen and (${devices.sm}) {
    width: 12rem;
  }
`
