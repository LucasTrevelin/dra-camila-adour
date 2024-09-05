import styled from 'styled-components'

export const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  aspect-ratio: 2 / 1;
  width: fit-content;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.8rem;
  padding: 0.5rem 1.5rem;
  line-height: 24px;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  flex-wrap: wrap;
`

export const IconTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  text-align: center;
  line-height: 40px;
`

export const TextParagraph = styled.p`
  text-align: justify;
  padding-left: 1.5rem;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding-top: 1rem;
`
