import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.article)`
  width: 22.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  position: relative;
`

export const CardTitle = styled(motion.h3)`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding: 0.1rem 0;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const CardText = styled(motion.p)`
  text-indent: 1rem;
  font-weight: 400;
  text-align: justify;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  margin: 0;
  border-radius: 1.25rem;
  padding: 0 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 26px;
`

export const CardImage = styled(motion.div)<{ $imageUrl?: string }>`
  width: 100%;
  height: 12.5rem;

  background: rgb(219, 155, 144);

  background-image: ${({ $imageUrl }) => $imageUrl && `url(${$imageUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.25rem 1.25rem 0 0;
`

export const ButtonContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  border: none;
  height: 100%;
  width: 100%;
  border-radius: 0 0 1.25rem 1.25rem;
  cursor: pointer;
  margin-top: 0.8rem;
  padding: 0.5rem;
  &:hover {
    filter: brightness(110%);
    transition: filter background-color 0.8ms ease-in-out;
  }
`
