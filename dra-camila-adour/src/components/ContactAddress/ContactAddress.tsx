import { ContentBody } from './ContactAddress.constants'
import * as S from './ContactAddress.styled'
import { TContactAddressProps } from './ContactAddress.types'

export const ContactAddress: React.FC<TContactAddressProps> = ({ variant }) => {
  return <S.Container $variant={variant}>{ContentBody[variant]}</S.Container>
}
