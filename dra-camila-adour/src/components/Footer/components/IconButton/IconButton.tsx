import { TIconButtonProps } from './IconButton.types'
import { iconMapper } from './IconButton.constants'
import { Button } from '../../../Button'
import { Link } from './IconButton.styled'
import { encodedHelpMessage } from '../../../../helpers/constants'

export const IconButton: React.FC<TIconButtonProps> = ({ variant }) => {
  return (
    <Link
      target='_blank'
      href={
        variant === 'whatsapp'
          ? `https://wa.me/+5521976162422?text=${encodedHelpMessage}`
          : 'https://www.instagram.com/dracamilaadour?igsh=MTV3YTJxZXpsejdmcw=='
      }
    >
      <Button variant='shortIcons' iconTheme={variant}>
        <img src={iconMapper[variant]} alt={`${variant}-button-icon`} />
      </Button>
    </Link>
  )
}
