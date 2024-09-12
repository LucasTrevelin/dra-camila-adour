import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const Container = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  row-gap: 4rem;
  @media screen and (${devices.sm}) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    padding: 2rem 0 6rem 0;
  }
`
export const Image = styled.img`
  aspect-ratio: 2.5/1;
  height: 50%;
  margin-left: 2rem;
  @media screen and (${devices.sm}) {
    height: 120px;
    margin-left: 0;
  }
`
