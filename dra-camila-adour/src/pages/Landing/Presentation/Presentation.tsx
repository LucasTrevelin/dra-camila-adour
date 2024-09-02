import * as S from './Presentation.styled'

export const Presentation: React.FC = () => {
  return (
    <S.Container>
      <img
        src='/assets/images/presentation-left-export.jpg'
        alt='about-clinic'
      />
      <img
        src='/assets/images/presentation-right-export.jpg'
        alt='about-clinic'
      />
    </S.Container>
  )
}
