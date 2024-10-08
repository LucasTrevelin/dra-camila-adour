import React from 'react'
import * as S from './Presentation.styled'

const PresentationContent: React.FC = () => {
  return (
    <>
      <S.TitleContainer>
        <S.Title
          variants={{
            hiddenLeft: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial='hiddenLeft'
          animate='visible'
          transition={{ ease: 'linear', delay: 0.3 }}
        >
          Doenças Inflamatórias Intestinais <br /> e Gastroenterologia Geral
        </S.Title>
        <S.Logo
          variants={{
            hiddenLeft: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial='hiddenLeft'
          animate='visible'
          transition={{ ease: 'linear', delay: 0.3 }}
          alt='dr-logo'
          src='/assets/images/logo-presentation.jpg'
        />
        <S.SmallLogo
          variants={{
            hiddenLeft: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial='hiddenLeft'
          animate='visible'
          transition={{ ease: 'linear', delay: 0.3 }}
          alt='about-clinic'
          src='/assets/images/logo-presentation.jpg'
        />
      </S.TitleContainer>

      <S.SmallScreenImage
        variants={{
          hiddenRight: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        }}
        initial='hiddenRight'
        animate='visible'
        transition={{ ease: 'linear', delay: 0.3 }}
        src='/assets/images/small-presentation.jpg'
        alt='about-clinic'
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
    </>
  )
}

export default PresentationContent
