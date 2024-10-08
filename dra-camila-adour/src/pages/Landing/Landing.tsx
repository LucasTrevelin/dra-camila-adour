import React from 'react'
import { Container } from './Landing.styled'
import { Header } from '../../components/Header/Header'
import { LandingContent } from './LandingContent/LandingContent'
import { HelpButton } from '../../components/HelpButton'
import { Footer } from '../../components/Footer'
import { Home } from './LandingContent/components/Home'
import { ColorFillContainer } from './LandingContent/LandingContent.styled'

export const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <HelpButton />
      <ColorFillContainer>
        <Home />
      </ColorFillContainer>
      <LandingContent />
      <Footer />
    </Container>
  )
}
