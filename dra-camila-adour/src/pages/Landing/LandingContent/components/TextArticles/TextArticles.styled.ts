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
  padding: 1rem 2rem;
  margin: 0;
  ul {
    list-style: none; /* Remove default bullets for all levels */
  }

  li {
    position: relative;
    padding-left: 20px; /* Adjust based on bullet size */
  }

  li::before {
    content: '▶'; /* Use any character or emoji */
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px; /* Custom size */
    position: absolute;
    left: 0;
    top: 0;
  }

  /* Ensure the style applies to all nested levels */
  ul ul li::before {
    content: '●'; /* Different bullet for nested levels */
    color: #e74c3c; /* Different color for nested levels */
    font-size: 16px; /* Different size for nested levels */
  }
`
