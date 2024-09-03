import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 5rem;
  width: 100%;
`

export const ArticleWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: center;
  flex-wrap: wrap-reverse;
`

export const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
