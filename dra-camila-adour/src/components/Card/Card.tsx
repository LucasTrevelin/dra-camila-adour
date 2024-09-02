import { useState } from 'react'
import * as S from './Card.styled'
import { TCardProps } from './Card.types'

export const Card: React.FC<TCardProps> = ({
  title,
  summary,
  textDetails,
  imageUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <S.Container layout onClick={() => setIsExpanded(!isExpanded)}>
      <S.CardImage
        layout='position'
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0 }}
        $imageUrl={imageUrl}
      />
      <S.CardTitle layout='position'>{title}</S.CardTitle>
      <S.CardText layout='position' transition={{ delay: 0.3 }}>
        {summary}
      </S.CardText>
      {!!isExpanded && (
        <>
          <S.CardText
            layout
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0 }}
          >
            {textDetails}
          </S.CardText>
        </>
      )}
      <S.Button>{isExpanded ? 'Fechar' : 'Clique para ver mais'}</S.Button>
    </S.Container>
  )
}
