import * as S from './Presentation.styled'

export const Presentation: React.FC = () => {
  return (
    <S.Container>
      <S.SmallScreenImage
        variants={{
          hiddenLeft: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hiddenLeft'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
        alt='about-clinic'
        src='/assets/images/small-presentation-left.jpg'
      />
      <S.SmallScreenImage
        variants={{
          hiddenRight: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hiddenRight'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
        src='/assets/images/small-presentation-export.jpg'
        alt='about-clinic'
      />
      <S.Image
        variants={{
          hiddenLeft: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hiddenLeft'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
        alt='about-clinic'
        src='/assets/images/presentation-left-export.jpg'
      />

      <S.Image
        variants={{
          hiddenRight: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hiddenRight'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
        src='/assets/images/presentation-right-export.jpg'
        alt='about-clinic'
      />
    </S.Container>
  )
}
