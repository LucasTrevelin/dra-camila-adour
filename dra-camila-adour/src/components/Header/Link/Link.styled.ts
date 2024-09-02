import styled, { css } from 'styled-components'
import { TSpecialLinksProps } from './Link.types'

const specialLinkContainer = css<TSpecialLinksProps>`
  border-radius: ${({ $variant }) => $variant && '1.875rem'};
  border: ${({ $variant, theme }) =>
    $variant === 'invertedFilled' && `1px solid ${theme.colors.primary}`};
  padding: ${({ $variant }) => $variant && '0.8rem 1.2rem'};
  background-color: ${({ $variant, theme }) =>
    $variant === 'normalFilled' && theme.colors.secondary};
  margin: ${({ $variant }) => $variant && '0 0.8rem'};
  & > a {
    color: ${({ $variant, theme }) =>
      $variant === 'normalFilled' && theme.colors.white};
  }
`

export const LinkContainer = styled.div<TSpecialLinksProps>`
  ${specialLinkContainer}
  display: flex;
  align-items: center;
  display: center;
  color: black;
  height: ${({ $variant }) => !$variant && '100%'};
  :hover {
    cursor: pointer;
  }
`

export const NavLink = styled.a`
  padding: 0 0.5rem;
  color: black;
`
