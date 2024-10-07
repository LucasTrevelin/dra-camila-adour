import { encodedHelpMessage } from '../../helpers/constants'
import { Button } from '../Button'
import { ButtonContent, Image } from './HelpButton.styled'

export const HelpButton: React.FC = () => {
  return (
    <Button variant={'help'}>
      <ButtonContent
        target='_blank'
        href={`https://wa.me/+5521976162422?text=${encodedHelpMessage}`}
      >
        <Image src='assets/icons/whatsapp-icon.svg' alt='whatsapp-icon' />
        Olá, como posso ajudá-lo?
      </ButtonContent>
    </Button>
  )
}
