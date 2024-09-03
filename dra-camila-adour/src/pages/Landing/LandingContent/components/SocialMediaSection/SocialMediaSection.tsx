import { Button } from '../../../../../components/Button'
import * as S from './SocialMediaSection.styled'

export const SocialMediaSection: React.FC = () => {
  return (
    <S.ButtonsContainer>
      <Button variant={'socialMedia'} iconTheme='whatsapp'>
        <S.ButtonContent>
          <img src='/assets/icons/whatsapp-icon.svg' alt='whatsapp-icon' />
          Quero agendar uma consulta!
        </S.ButtonContent>
      </Button>
      <Button variant={'socialMedia'}>
        <S.ButtonContent>
          <img src='/assets/icons/instagram-icon.svg' alt='instagram-icon' />
          Me acompanhe no instagram
        </S.ButtonContent>
      </Button>
    </S.ButtonsContainer>
  )
}
