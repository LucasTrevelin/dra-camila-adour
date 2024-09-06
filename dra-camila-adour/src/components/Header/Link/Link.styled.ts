import styled, { css } from 'styled-components'
import { TSpecialLinksProps } from './Link.types'

const specialLinkContainer = css<TSpecialLinksProps>`
  box-shadow: ${({ $variant }) =>
    $variant &&
    '0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'};
  border-radius: ${({ $variant }) => $variant && '1.875rem'};
  border: ${({ $variant, theme }) =>
    $variant === 'invertedFilled' && `1px solid ${theme.colors.primary}`};
  padding: ${({ $variant }) => $variant && '0.8rem 1.2rem'};
  background-color: ${({ $variant, theme }) => {
    if ($variant === 'normalFilled') return theme.colors.secondary
    if ($variant === 'invertedFilled') return theme.colors.white
  }};
  text-decoration: none;
  margin: ${({ $variant }) => $variant && '0 0.8rem'};
  & > a {
    color: ${({ $variant, theme }) =>
      $variant === 'normalFilled' && theme.colors.white};
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`

export const LinkContainer = styled.div<TSpecialLinksProps>`
  ${specialLinkContainer}
  display: flex;
  align-items: center;
  display: center;
  height: ${({ $variant }) => !$variant && '100%'};
  :hover {
    cursor: pointer;
  }
`

export const NavLink = styled.a`
  padding: 0 0.5rem;
  white-space: nowrap;
  scroll-behavior: smooth;
  color: inherit;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
`
