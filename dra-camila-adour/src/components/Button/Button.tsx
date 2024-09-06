import { IButtonProps } from './Button.types'
import * as S from './Button.styled'

export const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  title,
  iconTheme
}) => {
  return (
    <S.Button
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial={variant === 'help' && 'hidden'}
      animate={variant === 'help' && 'visible'}
      transition={{ ease: 'linear', delay: 0.5 }}
      $variant={variant}
      $iconTheme={iconTheme}
      title={title}
    >
      {children}
    </S.Button>
  )
}
