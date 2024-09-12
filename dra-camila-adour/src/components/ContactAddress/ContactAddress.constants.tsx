import { ReactNode } from 'react'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'
import { Mail, MapPinHouse, Phone } from 'lucide-react'
import { theme } from '../../global.styled'

export const ContentBody: Record<TContactAddressProps['variant'], ReactNode> = {
  contact: (
    <S.ContactCardContainer>
      <S.Image src='/assets/images/contact-logo.jpg' />
      <S.InfoContainer>
        <S.InformationParagraph>
          <strong>CRM:</strong> 52.88007-8
        </S.InformationParagraph>
        <S.InformationParagraph>
          <strong>RQE:</strong> (23974)
        </S.InformationParagraph>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.IconTextContainer>
          <Mail size={'20px'} color={theme.colors.primary} />
          <S.InformationParagraph>
            <em>camilaadour@gmail.com</em>
          </S.InformationParagraph>
        </S.IconTextContainer>
        <S.IconTextContainer>
          <Phone size={'20px'} color={theme.colors.primary} />
          <S.InformationParagraph>(21) 97616-2422</S.InformationParagraph>
        </S.IconTextContainer>
      </S.InfoContainer>
    </S.ContactCardContainer>
  ),

  address: (
    <>
      <S.Title>
        <MapPinHouse size={'20px'} color={theme.colors.primary} />
        &nbsp;Endereço de atendimento:
      </S.Title>
      <S.TextContainer>
        <S.TextParagraph>
          <strong>Rua:</strong> Avenida Visconde de Pirajá, 595
          <br />
          <strong>Complemento:</strong> Sala 605
          <br />
          <strong>Bairro:</strong> Ipanema
          <br />
          <strong>Rio de Janeiro - RJ</strong>
        </S.TextParagraph>
      </S.TextContainer>
    </>
  )
}
