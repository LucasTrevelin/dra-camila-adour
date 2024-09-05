import { ContactAddress } from '../../../../../components/ContactAddress'
import { Divider } from '../../../../../components/Divider'
import * as S from './ContactSection.styled'

export const ContactSection = () => {
  return (
    <S.ContactSection>
      <ContactAddress variant='contact' />
      <Divider />
      <ContactAddress variant='address' />
    </S.ContactSection>
  )
}
