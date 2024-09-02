import { TLinkProps } from './Link.types'
import * as S from './Link.styled'

export const Link: React.FC<TLinkProps> = ({ title, variant }) => {
  return (
    <S.LinkContainer key={`link-${title}`} $variant={variant}>
      <S.NavLink>{title}</S.NavLink>
    </S.LinkContainer>
  )
}
