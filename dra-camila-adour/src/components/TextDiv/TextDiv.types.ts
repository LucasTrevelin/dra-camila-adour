import { ReactNode } from 'react'
import { CSSProperties } from 'react'

export type TTextArea = {
  borderRadius?: CSSProperties['borderRadius']
  children: ReactNode
  hasWaterMark?: boolean
  hasBorder?: boolean
}

export type TBoxProps = {
  $borderRadius?: CSSProperties['borderRadius']
  hasBorder?: boolean
}
