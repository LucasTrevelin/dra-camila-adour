import { mappedLinksHelper } from '../../../../helpers/constants'
import { MappedLinks } from '../MappedLinks'
import * as S from './Navigation.styled'

export const Navigation = () => {
  return (
    <S.Container>
      <MappedLinks mappedLinks={mappedLinksHelper} />
    </S.Container>
  )
}
