import { ReactNode } from 'react'
import { CSSProperties } from 'react'

export type TTextArea = {
  borderRadius?: CSSProperties['borderRadius']
  children: ReactNode
  hasWaterMark?: boolean
  hasBorder?: boolean
  hasAnimation?: boolean
  backgroundImage?: string
}

export type TBoxProps = {
  $borderRadius?: CSSProperties['borderRadius']
  hasBorder?: boolean
  $backgroundImage?: string
}
