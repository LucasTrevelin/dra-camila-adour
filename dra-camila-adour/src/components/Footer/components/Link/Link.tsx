import { TLinkProps } from './Link.types'
import * as S from './Link.styled'

export const Link: React.FC<TLinkProps> = ({ title }) => {
  return (
    <S.LinkContainer key={`link-${title}`}>
      <S.NavLink>{title}</S.NavLink>
    </S.LinkContainer>
  )
}
