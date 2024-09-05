import { TIconButtonProps } from './IconButton.types'
import { iconMapper } from './IconButton.constants'
import { Button } from '../../../Button'

export const IconButton: React.FC<TIconButtonProps> = ({ variant }) => {
  return (
    <Button variant='shortIcons' iconTheme={variant}>
      <img src={iconMapper[variant]} alt={`${variant}-button-icon`} />
    </Button>
  )
}
