import * as S from './LandingContent.styled'
import { Topic } from '../../../components/Topic'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'
import { WhatITreat } from './components/WhatITreat'
import { StyledTextBox } from './components/StyledTextBox/StyledTextBox'
import { About } from './components/About'
import { ContactSection } from './components/ContactSection'
import { useRef } from 'react'
import { SocialMediaSection } from './components/SocialMediaSection/SocialMediaSection'

export const LandingContent: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <S.Container>
      <SocialMediaSection />
      <S.RegularTitleSection
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'linear', delay: 0.6 }}
      >
        <Topic title='O que eu trato' />
      </S.RegularTitleSection>
      <WhatITreat />
      <S.RegularTitleSection
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'easeInOut', delay: 0.6 }}
      >
        <Topic title='Doenças Inflamatórias Intestinais' />
      </S.RegularTitleSection>
      <ArticlesSection />
      <S.RegularTitleSection
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ delay: 0.6 }}
      >
        <Topic title='Sobre a gastroenterologia' />
      </S.RegularTitleSection>
      <StyledTextBox />
      <S.RegularTitleSection
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ delay: 0.6 }}
      >
        <Topic title='Sobre a Dra. Camila Adour' />
      </S.RegularTitleSection>
      <About />
      <S.RegularTitleSection
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ delay: 0.6 }}
      >
        <Topic title='Contato' />
      </S.RegularTitleSection>
      <ContactSection />
    </S.Container>
  )
}
