import { MappedLinks } from '../MappedLinks'
import * as S from './Navigation.styled'

export const Navigation = () => {
  return (
    <S.Container>
      <MappedLinks
        mappedLinks={[
          { title: 'Contato' },
          { title: 'Sobre a Dra. Camila Adour' },
          { title: 'Home' },
          { title: 'O que eu trato' },
          { title: 'Sobre a Gastroenterologia' }
        ]}
      />
    </S.Container>
  )
}
