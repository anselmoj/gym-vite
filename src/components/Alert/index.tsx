import IAthlete from '../../models/Athlete'
import ComponentButtonBase from '../button/Base'
import { Container, Title } from './styles'

export interface IAlertData {
  id: number
}

export interface IAlertProps {
  onClose: () => void
  onSubmit: (data: IAlertData) => void
  title: string
  athlete: IAthlete
  isLoading: boolean
}

const Alert = ({
  onClose,
  onSubmit,
  title,
  athlete,
  isLoading,
}: IAlertProps): JSX.Element => {
  return (
    <>
      <Title>{title}</Title>
      <Container>
        <ComponentButtonBase
          backgroundColor="#F80000"
          disabled={isLoading}
          height="2.25rem"
          onClick={onClose}
          type="button"
        >
          Cancelar
        </ComponentButtonBase>
        <ComponentButtonBase
          backgroundColor="#4ca35a"
          disabled={isLoading}
          height="2.25rem"
          isLoading={isLoading}
          onClick={() => onSubmit(athlete)}
          title="Salvar"
          type="submit"
        >
          Confirmar
        </ComponentButtonBase>
      </Container>
    </>
  )
}

export default Alert
