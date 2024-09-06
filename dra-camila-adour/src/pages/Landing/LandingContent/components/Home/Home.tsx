import { Presentation } from '../Presentation'
import { SocialMediaSection } from '../SocialMediaSection/SocialMediaSection'
import { Container } from './Home.styled'

export const Home = () => {
  return (
    <Container id='Home'>
      <Presentation />
      <SocialMediaSection />
    </Container>
  )
}
