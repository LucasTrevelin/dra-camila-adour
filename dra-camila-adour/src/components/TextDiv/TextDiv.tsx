import { useRef } from 'react'
import { Box, Content, WaterMark, WaterMarkContainer } from './TextDiv.styled'
import { TTextArea } from './TextDiv.types'

export const TextDiv: React.FC<TTextArea> = ({
  borderRadius,
  children,
  hasWaterMark,
  hasBorder,
  hasAnimation
}) => {
  const scrollRef = useRef(null)
  return (
    <Box
      $borderRadius={borderRadius}
      hasBorder={hasBorder}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: hasAnimation ? scrollRef : undefined, once: true }}
      transition={{ ease: 'linear', delay: 1 }}
    >
      <WaterMarkContainer>
        {hasWaterMark && (
          <WaterMark src='/assets/images/water-mark-dra-camila.png' />
        )}
      </WaterMarkContainer>
      <Content>{children}</Content>
    </Box>
  )
}
