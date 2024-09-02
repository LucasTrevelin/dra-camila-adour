import React from 'react'
import { Container } from './Landing.styled'
import { Header } from '../../components/Header/Header'
import { LandingContent } from './LandingContent/LandingContent'
import { HelpButton } from '../../components/HelpButton'

export const Landing: React.FC = () => {
  return (
    <Container>
      <Header />
      <HelpButton />
      <LandingContent />
    </Container>
  )
}
