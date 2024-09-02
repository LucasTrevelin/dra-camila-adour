import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: start;
  border-left: 5px solid ${({ theme }) => theme.colors.secondary};
  height: 6rem;
  font-size: 2.25rem;
  margin-left: 1.5rem;
  padding-left: 0.8rem;
  display: flex;
  width: 100%;
  align-items: center;
`
