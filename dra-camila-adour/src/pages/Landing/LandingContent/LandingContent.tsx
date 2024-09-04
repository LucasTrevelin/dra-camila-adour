import * as S from './LandingContent.styled'
import { Topic } from '../../../components/Topic'
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection'
import { WhatITreat } from './components/WhatITreat'
import { Home } from './components/Home'
import { StyledTextBox } from './components/StyledTextBox/StyledTextBox'
import { About } from './components/About'

export const LandingContent: React.FC = () => {
  return (
    <S.Container>
      <Home />
      <S.RegularTitleSection>
        <Topic title='O que eu trato' />
      </S.RegularTitleSection>
      <WhatITreat />
      <S.RegularTitleSection>
        <Topic title='Doenças Inflamatórias Intestinais' />
      </S.RegularTitleSection>
      <ArticlesSection />
      <S.RegularTitleSection>
        <Topic title='Sobre a gastroenterologia' />
      </S.RegularTitleSection>
      <StyledTextBox />
      <S.RegularTitleSection>
        <Topic title='Sobre a Dra. Camila Adour' />
      </S.RegularTitleSection>
      <About />
      <S.RegularTitleSection>
        <Topic title='Contato' />
      </S.RegularTitleSection>
    </S.Container>
  )
}
