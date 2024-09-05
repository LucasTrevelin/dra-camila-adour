import { Circle, Play } from 'lucide-react'
import { theme } from '../../global.styled'

export const BulletTopic = (text: string) => (
  <li>
    <Play
      color={theme.colors.primary}
      size={'16px'}
      fill={theme.colors.primary}
    />
    {text}
  </li>
)

export const BulletSubTopic = (text: string) => (
  <li>
    <Circle
      color={theme.colors.primary}
      size={'10px'}
      fill={theme.colors.primary}
    />
    {text}
  </li>
)
