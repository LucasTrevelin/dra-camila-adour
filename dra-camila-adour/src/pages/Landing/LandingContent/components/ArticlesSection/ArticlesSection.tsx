import { useRef } from 'react'
import { Card } from '../../../../../components/Card'
import { cardInformationArray } from './ArticlesSection.constant'
import { Container } from './ArticlesSection.styled'

export const ArticlesSection: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <Container
      id='Doenças Inflamatórias Intestinais'
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef, once: true }}
      transition={{ ease: 'linear', delay: 0.6 }}
    >
      {cardInformationArray.map(({ title, ...rest }) => (
        <Card key={`card-${title}`} title={title} {...rest} />
      ))}
    </Container>
  )
}
