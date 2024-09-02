import { Title } from './Topic.styled'
import { TTopicProps } from './Topic.types'

export const Topic: React.FC<TTopicProps> = ({ title }) => {
  return <Title>{title}</Title>
}
