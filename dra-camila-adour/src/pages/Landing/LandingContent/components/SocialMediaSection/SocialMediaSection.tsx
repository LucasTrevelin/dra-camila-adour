import { useRef } from 'react'
import { Button } from '../../../../../components/Button'
import * as S from './SocialMediaSection.styled'
import { encodedHelpMessage } from '../../../../../helpers/constants'

export const SocialMediaSection: React.FC = () => {
  const scrollRef = useRef(null)

  return (
    <S.ButtonsContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.5 }}
    >
      <S.Link
        target='_blank'
        href={`https://wa.me/+5521976162422?text=${encodedHelpMessage}`}
      >
        <Button variant={'socialMedia'} iconTheme='whatsapp'>
          <S.ButtonContent>
            <img src='/assets/icons/whatsapp-icon.svg' alt='whatsapp-icon' />
            Quero agendar uma consulta!
          </S.ButtonContent>
        </Button>
      </S.Link>
      <S.Link
        target='_blank'
        href='https://www.instagram.com/dracamilaadour?igsh=MTV3YTJxZXpsejdmcw=='
      >
        <Button variant={'socialMedia'}>
          <S.ButtonContent>
            <img src='/assets/icons/instagram-icon.svg' alt='instagram-icon' />
            Me acompanhe no instagram
          </S.ButtonContent>
        </Button>
      </S.Link>
    </S.ButtonsContainer>
  )
}
