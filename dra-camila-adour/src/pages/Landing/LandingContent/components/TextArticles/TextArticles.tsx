import * as S from './TextArticles.styled'
import {
  BulletSubTopic,
  BulletTopic
} from '../../../../../components/StyledBullet'

export const TextArticleA = () => {
  return (
    <S.TextContainer>
      <S.Title>A.&nbsp; Doenças Intestinais</S.Title>
      <S.FormattedText>
        {BulletTopic('Doenças Inflamatórias Intestinais:')}
        <ul>
          {BulletSubTopic('Doença de Crohn;')}
          {BulletSubTopic('Retocolite Ulcerativa; ')}
        </ul>
        {BulletTopic('Síndrome do Intestino irritável;')}
        {BulletTopic('Constipação intestinal;')}
        {BulletTopic(
          `Doença diverticular Investigação e tratamento de \n diarréias agudas e crônicas;`
        )}
        <li>
          {BulletTopic(
            `Doença diverticular Avaliação pré colonoscopia e interpretação de \n outros exames endoscópicos;`
          )}
        </li>
        {BulletTopic('Doença Celíaca;')}
        {BulletTopic('Investigação e tratamento de distensão abdominal; ')}
        {BulletTopic('Investigação e tratamento de dores abdominais;')}
        {BulletTopic('Investigação e tratamento de sangramentos digestivos;')}
      </S.FormattedText>
    </S.TextContainer>
  )
}

export const TextArticleB = () => {
  return (
    <S.TextContainer>
      <S.Title>
        B.&nbsp; Doenças do Esôfago, estômago, fígado e pâncreas:
      </S.Title>
      <S.FormattedText>
        {BulletTopic('Esofagites;')}
        {BulletTopic('Doença do Refluxo gastro esofágico;')}
        {BulletTopic('Azias; ')}
        {BulletTopic('Gastrite;')}
        {BulletTopic('Úlceras pépticas;')}
        {BulletTopic('Tratamento de H.pylori;')}
        {BulletTopic('Esteatose hepática;')}
        {BulletTopic('Nódulos hepáticos;')}
        {BulletTopic('Pancreatites agudas e crônicas;')}
        {BulletTopic('Investigação de enzimas do fígado e pâncreas alteradas;')}
      </S.FormattedText>
    </S.TextContainer>
  )
}
