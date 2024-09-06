import { useRef } from 'react'
import { BulletTopic } from '../../../../../components/StyledBullet'
import { TextDiv } from '../../../../../components/TextDiv'
import { Emphasize } from '../StyledTextBox/StyledTextBox.styled'
import * as S from './About.styled'

export const About: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <S.Centralizer id='Sobre a Dra. Camila Adour'>
      <S.ArticleSection>
        <TextDiv borderRadius={'0.625rem'} hasBorder={true}>
          <S.SubtopicContainer>
            <S.TextContent $maxWidth='43rem'>
              <S.SubtopicTitle>Formação Médica</S.SubtopicTitle>
              <Emphasize>Camila</Emphasize> é médica Gastroenterologista,
              graduada em Medicina pela Universidade Gama Filho (2009). Fez
              Residência médica em Clínica Médica no Hospital Municipal Souza
              Aguiar (2010-2011) e Residência Médica em Gastroenterologia pelo
              Hospital Naval Marcílio Dias (2012-2013). Durante a Residência em
              Gastroenterologia fez um estágio na Inglaterra, atuando em dois
              hospitais: St. James Hospital e o Leeds General Infirmary (2013),
              aumentando ainda mais o seu conhecimento em Gastroenterologia e
              endoscopia digestiva. Além disso, fez um aperfeiçoamento nos
              moldes Fellowship em Endoscopia digestiva no INCA (2014). Camila
              já ganhou dois prêmios na área da Gastroenterologia. O primeiro
              deles foi o International Scholarship Award, em 2012, quando
              ganhou o prêmio para participar do Congresso Europeu de
              Gastroenterologia, o UEG Week, que aconteceu em Amsterdan. Em
              2013, ganhou o primeiro lugar no Prêmio Jovem Gastro, com o tema
              Doença Celíaca Refratária. Este prêmio é promovido pela Federação
              Brasileira de Gastroenterologia e premia os melhores trabalhos
              apresentandos pelos residentes de todo o Brasil. Camila publicou
              um capítulo de livro no Tratado de Doenças Inflamatórias
              Intestinais publicado em 2023, cujo título foi: Gestação e
              lactação.
            </S.TextContent>
            <S.Image
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ ease: 'linear', delay: 0.5 }}
              src='/assets/images/picture-about-camila.jpg'
              alt='picture-camila-with-name-and-crm'
            />
          </S.SubtopicContainer>
          <S.SubtopicContainer>
            <S.TextContent>
              <S.SubtopicTitle>
                Atualização de conhecimento contínua
              </S.SubtopicTitle>
              <Emphasize>Camila</Emphasize> está em constante atualização na
              área das Doenças Inflamatórias Intestinais e da Gastroenterologia,
              participando de cursos e congressos no Brasil e no mundo. Já
              participou de congressos como o ECCO (Congresso Europeu de Doenças
              Inflamatórias Intestinais), o AIBD (Congresso Americano de Doenças
              Inflamatórias Intestinais), SBAD (Semana Brasileira do aparelho
              Digestivo), Sebradii (Semana Brasiliera de Doenças Inflamatórias
              Intestinais), dentre outros. Em abril de 2024, participou de uma
              Imersão em Doenças Inflamatórias Intestinais no Mount Sinai
              Hospital, em Toronto, no Canadá, trazendo ainda mais conhecimento
              para tratar os seus pacientes.
            </S.TextContent>
          </S.SubtopicContainer>
          <S.SubtopicContainer>
            <S.TextContent>
              <S.SubtopicTitle>Atualmente atua:</S.SubtopicTitle>
              <ul>
                {BulletTopic(
                  'Consultório particular de de Doenças inflamatórias Intestinais e Gastroenterologia em Ipanema.'
                )}

                {BulletTopic(
                  ' Médica da equipe de Gastroenterologia e das Doenças Inflamatórias Intestinais do Hospital Glória Dor.'
                )}

                {BulletTopic(
                  'Médica da equipe de Gastroenterologia da Clínica São Vicente da Gávea.'
                )}

                {BulletTopic(
                  'Médica responsável pelo ambulatório de Doenças Inflamatórias Intestinais do Hospital Federal do Andaraí.'
                )}

                {BulletTopic(
                  'Coordenadora Médica da área de Infusão de drogas Imunomediadas da Oncoclínicas das unidades Botafogo e Hospital Marcos Moraes.'
                )}

                {BulletTopic(
                  ' Médica responsável pelo ambulatório de Doenças Inflamatórias Intestinais do Hospital Federal do Andaraí.'
                )}
              </ul>
            </S.TextContent>
          </S.SubtopicContainer>
        </TextDiv>
      </S.ArticleSection>
    </S.Centralizer>
  )
}
