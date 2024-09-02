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
  padding: 0.1rem 0;
  color: ${({ theme }) => theme.colors.black};
`

export const CardText = styled(motion.p)`
  font-weight: 400;
  text-align: justify;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  margin: 0;
  border-radius: 1.25rem;
  padding: 0 0.8rem;
  color: ${({ theme }) => theme.colors.black};
`

export const CardImage = styled(motion.div)<{ $imageUrl?: string }>`
  width: 100%;
  height: 12.5rem;

  background: rgb(219, 155, 144);
  background: linear-gradient(
    90deg,
    rgba(219, 155, 144, 1) 0%,
    rgba(245, 239, 239, 1) 50%,
    rgba(219, 155, 144, 1) 100%
  );
  background-image: ${({ $imageUrl }) => $imageUrl && `url(${$imageUrl})`};
  background-size: cover; /* this way */
  border-radius: 1.25rem 1.25rem 0 0;
  filter: brightness(70%);
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
  width: 100%;
  border-radius: 0 0 0.3rem 0.3rem;
  cursor: pointer;
  margin-top: 0.3rem;
  &:hover {
    filter: brightness(120%);
    transition: filter background-color 0.8ms ease-in-out;
  }
`
