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
        <p>
          <strong>CRM:</strong> 52.88007-8
        </p>
        <p>
          <strong>RQE:</strong> (23974)
        </p>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.IconTextContainer>
          <Mail size={'20px'} color={theme.colors.primary} />
          <p>
            <em>camilaadour@gmail.com</em>
          </p>
        </S.IconTextContainer>
        <S.IconTextContainer>
          <Phone size={'20px'} color={theme.colors.primary} />
          <p>(21) 97616-2422</p>
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
        </S.TextParagraph>
        <S.TextParagraph>
          <strong>Bairro:</strong> Ipanema
          <br />
          <strong>Rio de Janeiro - RJ</strong>
        </S.TextParagraph>
      </S.TextContainer>
    </>
  )
}
