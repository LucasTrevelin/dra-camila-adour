import { TextDiv } from '../../../../../components/TextDiv'
import { TextArticleA, TextArticleB } from '../TextArticles'
import * as S from './WhatITreat.styled'

export const WhatITreat: React.FC = () => {
  return (
    <S.Container>
      <S.ArticleWrapper>
        <TextDiv borderRadius={'30px 0 30px 0'}>
          <TextArticleA />
        </TextDiv>
        <S.ImageWrapper>
          <img src='/assets/images/image-a.png' alt='letter-a' />
        </S.ImageWrapper>
      </S.ArticleWrapper>
      <img src='/assets/icons/plus-sign.png' alt='plus-sign' />
      <S.ArticleWrapper>
        <S.ImageWrapper>
          <img src='/assets/images/image-b.png' alt='letter-a' />
        </S.ImageWrapper>
        <TextDiv borderRadius={'0 30px 0 30px'}>
          <TextArticleB />
        </TextDiv>
      </S.ArticleWrapper>
    </S.Container>
  )
}
