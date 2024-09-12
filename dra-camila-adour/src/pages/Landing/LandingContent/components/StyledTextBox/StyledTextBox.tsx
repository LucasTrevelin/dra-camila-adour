import { useRef } from 'react'
import { TextDiv } from '../../../../../components/TextDiv'
import { theme } from '../../../../../global.styled'
import * as S from './StyledTextBox.styled'

export const StyledTextBox: React.FC = () => {
  const scrollRef = useRef(null)
  return (
    <S.Container id='Sobre a gastroenterologia'>
      <S.AuxContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'linear', delay: 1.5 }}
      >
        <S.DecorativeBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $top: '-1.5', $left: '-1.5' }}
          $backgroundColor={theme.colors.primary}
        />
        <TextDiv borderRadius={'0.625rem'} hasWaterMark={true} hasAnimation>
          <S.TextContent>
            O médico{' '}
            <S.Emphasize $hasBiggerFont={true}>gastroenterologista</S.Emphasize>{' '}
            é o especialista responsável pelo diagnóstico, tratamento e
            prevenção de doenças que afetam o sistema digestivo. Isso inclui
            órgãos como o esôfago, estômago, intestinos, fígado, pâncreas e
            vesícula biliar. Entre as condições mais comuns tratadas por esse
            profissional estão gastrite, úlceras, refluxo gastroesofágico,
            síndrome do intestino irritável, hepatites, pancreatite e doenças
            inflamatórias intestinais, como a doença de Crohn e a colite
            ulcerative, dentre outras. Além do diagnóstico e tratamento, o
            gastroenterologista também atua na orientação preventiva, ajudando
            os pacientes a adotarem hábitos alimentares e de vida que possam
            prevenir o desenvolvimento de doenças digestivas. O acompanhamento
            regular com esse especialista é essencial, especialmente para
            pessoas com histórico familiar de doenças gastrointestinais ou que
            apresentem sintomas recorrentes, como dor e distensão abdominal,
            náuseas, vômitos, diarreia ou constipação. O objetivo principal do
            gastroenterologista é promover a saúde do sistema digestivo,
            garantindo o bem-estar e a qualidade de vida dos pacientes.
          </S.TextContent>
        </TextDiv>
        <S.DecorativeBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $bottom: '-1.5', $right: '-1.5' }}
          $backgroundColor={theme.colors.secondary}
        />
      </S.AuxContainer>
      <S.SmallScreensAuxContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'linear', delay: 1.5 }}
      >
        <S.DecorativeBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $top: '-1.5', $left: '-1.5' }}
          $backgroundColor={theme.colors.primary}
        />
        <TextDiv borderRadius={'0.625rem'} hasWaterMark={true} hasAnimation>
          <S.TextContent>
            O médico{' '}
            <S.Emphasize $hasBiggerFont={true}>gastroenterologista</S.Emphasize>{' '}
            é o especialista responsável pelo diagnóstico, tratamento e
            prevenção de doenças que afetam o sistema digestivo. Isso inclui
            órgãos como o esôfago, estômago, intestinos, fígado, pâncreas e
            vesícula biliar. Entre as condições mais comuns tratadas por esse
            profissional estão gastrite, úlceras, refluxo gastroesofágico,
            síndrome do intestino irritável, hepatites, pancreatite e doenças
            inflamatórias intestinais, como a doença de Crohn e a colite
            ulcerative, dentre outras.
          </S.TextContent>
        </TextDiv>
        <S.DecorativeBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $bottom: '-1.5', $right: '-1.5' }}
          $backgroundColor={theme.colors.secondary}
        />
      </S.SmallScreensAuxContainer>
      <S.SmallScreensAuxContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, once: true }}
        transition={{ ease: 'linear', delay: 1.5 }}
      >
        <S.DecorativeBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $top: '-1.5', $right: '-1.5' }}
          $backgroundColor={theme.colors.primary}
        />
        <TextDiv borderRadius={'0.625rem'} hasWaterMark={true} hasAnimation>
          <S.TextContent>
            Além do diagnóstico e tratamento, o gastroenterologista também atua
            na orientação preventiva, ajudando os pacientes a adotarem hábitos
            alimentares e de vida que possam prevenir o desenvolvimento de
            doenças digestivas. O acompanhamento regular com esse especialista é
            essencial, especialmente para pessoas com histórico familiar de
            doenças gastrointestinais ou que apresentem sintomas recorrentes,
            como dor e distensão abdominal, náuseas, vômitos, diarreia ou
            constipação. O objetivo principal do gastroenterologista é promover
            a saúde do sistema digestivo, garantindo o bem-estar e a qualidade
            de vida dos pacientes.
          </S.TextContent>
        </TextDiv>
        <S.DecorativeBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef, once: true }}
          transition={{ ease: 'linear', delay: 0.3 }}
          $coordinates={{ $bottom: '-1.5', $left: '-1.5' }}
          $backgroundColor={theme.colors.secondary}
        />
      </S.SmallScreensAuxContainer>
    </S.Container>
  )
}
