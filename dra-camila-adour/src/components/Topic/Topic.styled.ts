import styled from 'styled-components'
import { devices } from '../../helpers/breakpoints.helpers'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: start;
  border-left: 5px solid ${({ theme }) => theme.colors.secondary};
  height: 6rem;
  font-size: 2.25rem;
  padding-left: 0.8rem;
  display: flex;
  width: 100%;
  align-items: center;
  margin: 2rem 0 0 0;
  line-height: 40px;

  @media screen and (${devices.sm}) {
    font-size: 1.5rem;
  }
`
