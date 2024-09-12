import { theme } from '../../global.styled'
import { StyledCircle, StyledPlay } from './StyledBullet.styled'

export const BulletTopic = (text: string) => (
  <li>
    <StyledPlay color={theme.colors.primary} fill={theme.colors.primary} />
    {text}
  </li>
)

export const BulletSubTopic = (text: string) => (
  <li>
    <StyledCircle color={theme.colors.primary} fill={theme.colors.primary} />
    {text}
  </li>
)
