import { headerLinks } from './Header.constants'
import * as S from './Header.styled'
import { MappedLinks } from './MappedLinks/MappedLinks'
export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Image src='/assets/images/logo-header.svg' alt='logo-header' />
      <MappedLinks mappedLinks={headerLinks} />
    </S.Container>
  )
}