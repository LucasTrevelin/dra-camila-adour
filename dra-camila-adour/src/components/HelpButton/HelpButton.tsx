import { Button } from '../Button'
import { ButtonContent, Image } from './HelpButton.styled'

export const HelpButton: React.FC = () => {
  return (
    <Button variant={'help'}>
      <ButtonContent>
        <Image src='/assets/icons/whatsapp-icon.svg' alt='whatsapp-icon' />
        Olá, como posso ajudá-lo?
      </ButtonContent>
    </Button>
  )
}
