import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  disabled?: boolean
  children: ReactNode
  variant: TButtonVariants['$variant']
  iconTheme?: TButtonVariants['$iconTheme']
}

export type TButtonVariants = {
  $variant: 'socialMedia' | 'help' | 'shortIcons'
  $iconTheme?: 'whatsapp' | 'instagram'
  $isHidden?: boolean
}
