import styled from 'styled-components'

export const TextContainer = styled.ul`
  list-style: none;
`

export const Title = styled.h3`
  text-align: justify;
  margin: 0.1rem 0;
  text-decoration: underline;
`
export const FormattedText = styled.p`
  line-height: 40px;
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
  }

  li {
    line-height: 40px; /* Set consistent line height */
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;
    & > svg {
      padding-top: 0.8rem;
    }
  }
`
