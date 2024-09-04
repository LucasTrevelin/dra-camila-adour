export type TContactAddressProps = {
  variant: 'contact' | 'address'
}

export type TContainerContact = {
  $variant: TContactAddressProps['variant']
}
