import { useRef } from 'react'
import { TextDiv } from '../../../../../components/TextDiv'
import { TextArticleA, TextArticleB } from '../TextArticles'
import * as S from './WhatITreat.styled'

export const WhatITreat: React.FC = () => {
  const scrollRef1 = useRef(null)
  return (
    <S.Container id='O que eu trato'>
      <TextDiv
        borderRadius={'30px 0 30px 0'}
        backgroundImage='/assets/images/what-i-treat-image-a.jpg'
      >
        <TextArticleA />
      </TextDiv>
      <S.CenterImage
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef1, once: true }}
        transition={{ ease: 'linear', delay: 0.5 }}
        src='/assets/icons/plus-sign.png'
        alt='plus-sign'
      />

      <TextDiv
        borderRadius={'0 30px 0 30px'}
        backgroundImage='/assets/images/what-i-treat-image-b.jpg'
      >
        <TextArticleB />
      </TextDiv>
    </S.Container>
  )
}
