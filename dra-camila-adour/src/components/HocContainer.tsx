import { ReactNode } from 'react'
import { Container } from './HocContainer.styled'

export const HocContainer: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  return <Container>{children}</Container>
}
