import { Card } from '../../../../../components/Card'
import { cardInformationArray } from './ArticlesSection.constant'
import { Container } from './ArticlesSection.styled'

export const ArticlesSection: React.FC = () => {
  return (
    <Container>
      {cardInformationArray.map(({ title, ...rest }) => (
        <Card key={`card-${title}`} title={title} {...rest} />
      ))}
    </Container>
  )
}
