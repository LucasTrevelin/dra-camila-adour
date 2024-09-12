import styled from 'styled-components'
import { devices } from '../../../../helpers/breakpoints.helpers'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 8rem;
  height: 100%;
  flex: 1;

  @media screen and (${devices.sm}) {
    display: none;
  }
`

export const TitleSection = styled.h4`
  margin: 0;
  padding: 0 0 1rem 0;
`
