import styled from 'styled-components'

export const Centralizer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArticleSection = styled.section`
  max-width: 80rem;
`

export const SubtopicContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  ul {
    list-style: none;
  }
  li {
    line-height: 30px; /* Set consistent line height */
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;
    text-align: start;
    & > svg {
      padding-top: 0.3rem;
    }
  }
`

export const SubtopicTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  text-indent: 0%;
`

export const Image = styled.img`
  aspect-ratio: 0.91/1;
  width: 430px;
`
