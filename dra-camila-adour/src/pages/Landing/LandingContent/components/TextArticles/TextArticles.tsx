import * as S from './TextArticles.styled'

export const TextArticleA = () => {
  return (
    <S.TextContainer>
      <S.Title>A.&nbsp; Doenças Intestinais</S.Title>
      <S.FormattedText>
        <li>Doenças Inflamatórias Intestinais:</li>
        <ul>
          <li>Doença de Crohn;</li>
          <li>Retocolite Ulcerativa; </li>
        </ul>
        <li> Síndrome do Intestino irritável; </li>
        <li>Constipação intestinal; </li>
        <li>
          Doença diverticular Investigação e tratamento de <br /> diarréias
          agudas e crônicas;
        </li>
        <li>
          Doença diverticular Avaliação pré colonoscopia e interpretação de
          <br />
          outros exames endoscópicos;
        </li>
        <li>Doença Celíaca; </li>
        <li>Investigação e tratamento de distensão abdominal; </li>
        <li>Investigaçãoe tratamento de dores abdominais;</li>
        <li>Investigação e tratamento de sangramentos digestivos;</li>
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
        <li> Esofagites;</li>
        <li> Doença do Refluxo gastro esofágico; </li>
        <li> Azias; </li>
        <li> Gastrite;</li>
        <li> Úlceras pépticas; </li>
        <li> Tratamento de H.pylori; </li>
        <li> Esteatose hepática; </li>
        <li> Nódulos hepáticos; </li>
        <li> Pancreatites agudas e crônicas; </li>
        <li> Investigação de enzimas do fígado e pâncreas alteradas;</li>
      </S.FormattedText>
    </S.TextContainer>
  )
}
