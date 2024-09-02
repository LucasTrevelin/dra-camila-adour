import { Presentation } from './Presentation'
import * as S from './LandingContent.styled'
import { SocialMediaSection } from './SocialMediaSection/SocialMediaSection'
import { Topic } from '../../../components/Topic'

export const LandingContent: React.FC = () => {
  return (
    <S.Container>
      <S.CentralizedSection>
        <Presentation />
        <SocialMediaSection />
      </S.CentralizedSection>
      <S.NormalSection>
        <Topic title='O que eu trato' />
      </S.NormalSection>
      <S.NormalSection>
        <Topic title='O que eu trato' />
      </S.NormalSection>
      <S.NormalSection>
        <Topic title='O que eu trato' />
      </S.NormalSection>
    </S.Container>
  )
}
