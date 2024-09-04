import styled from 'styled-components'
import { TContainerContact } from './ContactAddress.types'

export const Container = styled.article<TContainerContact>`
  background-color: ${({ theme }) => theme.colors.white};
  aspect-ratio: ${({ $variant }) => $variant === 'contact' && 2 / 1};
  width: ${({ $variant }) => ($variant === 'contact' ? '25rem' : '100%')};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem 2rem;
  line-height: ${({ $variant }) => $variant === 'address' && '42px'};
  align-items: ${({ $variant }) =>
    $variant === 'contact' ? 'center' : 'flex-start'};
  margin-bottom: 4rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  aspect-ratio: 7.6/1;
  width: 17.5rem;
  margin-bottom: 1.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
`

export const IconTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
`

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.25rem;
  padding: 0 0.75rem;
  background-color: white;
  border-radius: 10px;
`

export const TextParagraph = styled.p`
  text-align: justify;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding-top: 1rem;
  text-indent: 1rem;
`
