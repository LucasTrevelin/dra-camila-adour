export type TSpecialLinksProps = {
  $variant?: 'normalFilled' | 'invertedFilled'
}

export type TLinkProps = {
  title: string
  variant?: TSpecialLinksProps['$variant']
}
