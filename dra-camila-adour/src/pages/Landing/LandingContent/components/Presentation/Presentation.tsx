import PresentationContent from './PresentationContent'
import * as S from './Presentation.styled'

export const Presentation: React.FC = () => {
  return (
    <S.FlexColumnContainer>
      <S.Container>
        <PresentationContent />
      </S.Container>
      <S.ContainerBorderBottom />
    </S.FlexColumnContainer>
  )
}
