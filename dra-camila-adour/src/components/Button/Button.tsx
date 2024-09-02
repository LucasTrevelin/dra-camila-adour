import { IButtonProps } from './Button.types'
import * as S from './Button.styled'

export const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  title,
  iconTheme
}) => {
  return (
    <S.Button $variant={variant} $iconTheme={iconTheme} title={title}>
      {children}
    </S.Button>
  )
}
