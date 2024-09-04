import { Box, Content, WaterMark, WaterMarkContainer } from './TextDiv.styled'
import { TTextArea } from './TextDiv.types'

export const TextDiv: React.FC<TTextArea> = ({
  borderRadius,
  children,
  hasWaterMark,
  hasBorder
}) => {
  return (
    <Box $borderRadius={borderRadius} hasBorder={hasBorder}>
      <WaterMarkContainer>
        {hasWaterMark && (
          <WaterMark src='/assets/images/water-mark-dra-camila.png' />
        )}
      </WaterMarkContainer>
      <Content>{children}</Content>
    </Box>
  )
}
