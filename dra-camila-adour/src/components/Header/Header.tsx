import { headerLinks } from './Header.constants'
import * as S from './Header.styled'
import { MappedLinks } from './MappedLinks/MappedLinks'
export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image
          src='/assets/images/logo-header-transparent.png'
          alt='logo-header'
        />
        <MappedLinks mappedLinks={headerLinks} />
      </S.ImageContainer>
    </S.Container>
  )
}
