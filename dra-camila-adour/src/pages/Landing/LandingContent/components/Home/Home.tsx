import { Presentation } from '../Presentation'
import { SocialMediaSection } from '../SocialMediaSection/SocialMediaSection'
import { Container } from './Home.styled'

export const Home = () => {
  return (
    <Container>
      <Presentation />
      <SocialMediaSection />
    </Container>
  )
}
