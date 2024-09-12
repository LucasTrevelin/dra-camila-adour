import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const TextContainer = styled.ul`
  list-style: none;
`

export const Title = styled.h3`
  text-align: justify;
  margin: 0.1rem 0;
  text-decoration: underline;
  padding-right: 2rem;

  @media screen and (${devices.sm}) {
    font-size: 0.875rem;
  }
`
export const FormattedText = styled.p`
  line-height: 2.5rem;
  max-width: 43rem;
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  text-align: justify;
  padding: 1rem 2rem 1rem 0;
  margin: 0;
  ul {
    list-style: none; /* Remove default bullets for all levels */
    svg {
      padding-top: 0.9rem !important;
    }
    @media screen and (${devices.sm}) {
      svg {
        padding-top: 0.5rem !important;
        height: 0.625rem !important;
        width: 0.625rem !important;
        min-height: 0.625rem !important;
        min-width: 0.625rem !important;
      }
    }
  }

  li {
    line-height: 2.5rem; /* Set consistent line height */
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;
    & > svg {
      padding-top: 0.7rem;
    }

    @media screen and (${devices.sm}) {
      line-height: 1.625rem;

      & > svg {
        padding-top: 0.5rem;
        height: 0.75rem;
        width: 0.75rem;
        min-height: 0.75rem;
        min-width: 0.75rem;
      }
    }

    & > ul {
      & > svg {
        height: 0.2rem;
        width: 0.2rem;
        background-color: red;
      }
    }
  }

  @media screen and (${devices.sm}) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
