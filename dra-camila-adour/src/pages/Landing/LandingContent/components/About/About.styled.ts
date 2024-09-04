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
  line-height: 26px;
  text-indent: 1rem;
  max-width: ${({ $maxWidth }) => $maxWidth};
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* Modern equivalent */
  text-align: justify;
  padding: 1rem 2rem;
`

export const SubtopicTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  text-indent: 0%;
`

export const Image = styled.img`
  aspect-ratio: 0.91/1;
  width: 430px;
`
