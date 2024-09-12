import { Navigation } from './components/Navigation'
import { SocialNetworks } from './components/Navigation/SocialNetworks'
import * as S from './Footer.styled'

export const Footer = () => {
  return (
    <S.Container id={'footer'}>
      <S.Image src='/assets/images/footer-logo.jpg' alt='footer-logo' />
      <Navigation />
      <SocialNetworks />
    </S.Container>
  )
}
