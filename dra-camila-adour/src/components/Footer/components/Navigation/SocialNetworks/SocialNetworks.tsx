import { IconButton } from '../../IconButton'
import { TitleSection } from '../Navigation.styled'
import * as S from './SocialNetworks.styled'

export const SocialNetworks = () => {
  return (
    <S.Container>
      <TitleSection>Redes Sociais</TitleSection>
      <S.IconContainers>
        <IconButton variant='instagram' />
        <IconButton variant='whatsapp' />
      </S.IconContainers>
    </S.Container>
  )
}
