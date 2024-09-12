import React from 'react'
import { TModalMappedLinksProps } from './ModalMappedLinks.types'

import * as S from './ModalMappedLinks.styled'
import { Link } from '../Link'
import { AnimatePresence } from 'framer-motion'

export const ModalMappedLinks: React.FC<TModalMappedLinksProps> = ({
  mappedLinks,
  isOpen = true
}) => {
  return (
    <AnimatePresence>
      <S.LinksWrapper $isOpen={isOpen} layout transition={{ delay: 0.3 }}>
        {mappedLinks.map(({ title, variant }) => (
          <Link key={`link-${title}`} title={title} variant={variant} />
        ))}
      </S.LinksWrapper>
    </AnimatePresence>
  )
}
