import { Box, Content } from './TextDiv.styled'
import { TTextArea } from './TextDiv.types'

export const TextDiv: React.FC<TTextArea> = ({ borderRadius, children }) => {
  return (
    <Box $borderRadius={borderRadius}>
      <Content>{children}</Content>
    </Box>
  )
}
