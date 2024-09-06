import { useRef } from 'react'
import { TextDiv } from '../../../../../components/TextDiv'
import { TextArticleA, TextArticleB } from '../TextArticles'
import * as S from './WhatITreat.styled'
import { motion } from 'framer-motion'

export const WhatITreat: React.FC = () => {
  const scrollRef1 = useRef(null)
  return (
    <S.Container id='O que eu trato'>
      <S.ArticleWrapper
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef1, once: true }}
        transition={{ ease: 'linear', delay: 1 }}
      >
        <TextDiv borderRadius={'30px 0 30px 0'}>
          <TextArticleA />
        </TextDiv>
        <S.ImageWrapper>
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef1, once: true }}
            transition={{ ease: 'linear', delay: 0.3 }}
            src='/assets/images/image-a.png'
            alt='letter-a'
          />
        </S.ImageWrapper>
      </S.ArticleWrapper>
      <motion.img
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef1, once: true }}
        transition={{ ease: 'linear', delay: 0.5 }}
        src='/assets/icons/plus-sign.png'
        alt='plus-sign'
      />
      <S.ArticleWrapper
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef1, once: true }}
        transition={{ ease: 'linear', delay: 0.3 }}
      >
        <S.ImageWrapper>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef1, once: true }}
            transition={{ ease: 'linear', delay: 1 }}
            src='/assets/images/image-b.png'
            alt='letter-a'
          />
        </S.ImageWrapper>
        <TextDiv borderRadius={'0 30px 0 30px'}>
          <TextArticleB />
        </TextDiv>
      </S.ArticleWrapper>
    </S.Container>
  )
}
