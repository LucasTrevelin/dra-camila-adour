import { CSSProperties } from 'styled-components'

export type TDecorativeBoxCoordinates = {
  $coordinates: {
    $top?: string
    $bottom?: string
    $left?: string
    $right?: string
  }
  $backgroundColor: CSSProperties['background']
}
