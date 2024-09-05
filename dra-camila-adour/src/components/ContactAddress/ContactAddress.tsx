import { ContentBody } from './ContactAddress.constants'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'

export const ContactAddress: React.FC<TContactAddressProps> = ({ variant }) => {
  return variant === 'contact' ? (
    <S.CardContainer>{ContentBody[variant]}</S.CardContainer>
  ) : (
    <S.AddressContainer>{ContentBody[variant]}</S.AddressContainer>
  )
}
