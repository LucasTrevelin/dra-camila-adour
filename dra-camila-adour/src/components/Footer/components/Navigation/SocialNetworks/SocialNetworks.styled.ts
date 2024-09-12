import styled from 'styled-components'
import { devices } from '../../../../../helpers/breakpoints.helpers'

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 8rem;
  flex: 1;

  @media screen and (${devices.sm}) {
    margin-left: 2rem;
    padding-right: 0;
  }
`

export const IconContainers = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  column-gap: 10rem;
  width: 100%;
`
