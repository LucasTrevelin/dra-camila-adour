import { Button } from '../Button'
import { ButtonContent } from './HelpButton.styled'

export const HelpButton: React.FC = () => {
  return (
    <Button variant={'help'}>
      <ButtonContent>
        <img src='/assets/icons/whatsapp-icon.svg' alt='whatsapp-icon' />
        Olá, como posso ajudá-lo?
      </ButtonContent>
    </Button>
  )
}
