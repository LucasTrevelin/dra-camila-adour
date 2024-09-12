import { useState } from 'react'
import { HamburguerMenu } from './HamburguerMenu'
import { headerLinks, headerMenuLinks } from './Header.constants'
import * as S from './Header.styled'
import { MappedLinks } from './MappedLinks/MappedLinks'
import { ModalMappedLinks } from './ModalMappedLinks'
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Image
            src='/assets/images/logo-header-transparent.png'
            alt='logo-header'
          />
          <MappedLinks mappedLinks={headerLinks} />
          <HamburguerMenu onClick={openMenu} />
        </S.ImageContainer>
      </S.Container>
      <ModalMappedLinks
        mappedLinks={headerMenuLinks}
        isOpen={isMenuOpen}
        additionalAction={openMenu}
      />
    </>
  )
}
