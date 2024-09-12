export type TSpecialLinksProps = {
  $variant?:
    | 'normalFilled'
    | 'invertedFilled'
    | 'hamburguer-highlight'
    | 'hamburguer'
}

export type TLinkProps = {
  title: string
  variant?: TSpecialLinksProps['$variant']
  additionalAction?: VoidFunction
}
