import styled, { css } from 'styled-components'
import { TButtonVariants } from './Button.types'

const mapperVariants = {
  socialMedia: css<TButtonVariants>`
    width: 26rem;
    height: 3.3rem;
    border-radius: 1.875rem;
    background-color: ${({ theme, $iconTheme }) =>
      $iconTheme === 'whatsapp'
        ? theme.colors.whatsappGreen
        : theme.colors.secondary};
    color: ${({ theme, $iconTheme }) => $iconTheme && theme.colors.white};
  `,
  help: css`
    position: fixed;
    bottom: 3.125rem;
    right: 3.125rem;
    width: 19rem;
    background-color: ${({ theme }) => theme.colors.whatsappGreen};
    color: ${({ theme }) => theme.colors.white};
    z-index: 95;
  `,
  shortIcons: css``
}

export const Button = styled.button<TButtonVariants>`
  ${({ $variant }) => mapperVariants[$variant]}
  box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,0.2), 0 0.375rem 1.25rem 0 rgba(0,0,0,0.19);
  font-weight: 600;
  border-radius: 1.875rem;
  white-space: nowrap;
`
