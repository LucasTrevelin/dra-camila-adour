import * as S from './TextArticles.styled'

export const TextArticleA = () => {
  return (
    <>
      <S.Title>
        <pre>{`    A. Doenças Intestinais:`}</pre>
      </S.Title>
      <S.FormattedText>
        {`              - Doenças Inflamatórias Intestinais: 
                - Doença de Crohn; 
                - Retocolite Ulcerativa; 
              - Síndrome do Intestino irritável;
              - Constipação intestinal; 
              - Doença diverticular Investigação e tratamento de diarréias agudas e crônicas;      
              - Doença diverticular Avaliação pré colonoscopia e interpretação 
            de outros exames endoscópicos; 
              - Doença Celíaca; 
              - Investigação e tratamento de distensão abdominal; 
              - Investigaçãoe tratamento de dores abdominais; 
              - Investigação e tratamento de sangramentos digestivos;`}
      </S.FormattedText>
    </>
  )
}

export const TextArticleB = () => {
  return (
    <>
      <S.Title style={{ textAlign: 'justify' }}>
        <pre>{`    B. Doenças do Esôfago, estômago, fígado e pâncreas:  `}</pre>
      </S.Title>
      <S.FormattedText style={{ textAlign: 'justify' }}>
        {`        - Esofagites;
        - Doença do Refluxo gastro esofágico; 
        - Azias;
        - Gastrite; 
        - Úlceras pépticas;
        - Tratamento de H.pylori; 
        - Esteatose hepática; 
        - Nódulos hepáticos; 
        - Pancreatites agudas e crônicas; 
        - Investigação de enzimas do fígado e pâncreas alteradas;`}
      </S.FormattedText>
    </>
  )
}
