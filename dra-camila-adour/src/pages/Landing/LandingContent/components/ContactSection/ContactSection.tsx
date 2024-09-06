import { ContactAddress } from '../../../../../components/ContactAddress'
import * as S from './ContactSection.styled'

export const ContactSection = () => {
  return (
    <S.ContactSection id='Contato'>
      <ContactAddress variant='contact' />
      <ContactAddress variant='address' />
    </S.ContactSection>
  )
}
