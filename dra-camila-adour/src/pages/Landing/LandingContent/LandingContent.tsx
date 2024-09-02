import { Presentation } from './Presentation'
import * as S from './LandingContent.styled'
import { SocialMediaSection } from './SocialMediaSection/SocialMediaSection'
import { Topic } from '../../../components/Topic'
import { ArticlesSection } from './ArticlesSection/ArticlesSection'

export const LandingContent: React.FC = () => {
  return (
    <S.Container>
      <S.CentralizedSection>
        <Presentation />
        <SocialMediaSection />
      </S.CentralizedSection>
      <S.NormalSection>
        <Topic title='Doenças Inflamatórias Intestinais' />
      </S.NormalSection>
      <ArticlesSection />
    </S.Container>
  )
}
