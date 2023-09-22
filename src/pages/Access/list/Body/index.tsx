import { Info, Container } from './styles'
import ComponentIsVisible from '../../../../components/utils/IsVisible'
import IAccess from '../../../../models/Access'

interface IProps {
  access: IAccess
  position: number
}

enum IType {
  'Entrada' = 'E',
  'Saída' = 's',
}

export default function AccessList({ access, position }: IProps) {
  return (
    <Container addColorRow={position % 2 === 0}>
      <Info>{access.gym_student.name}</Info>
      <Info>{access.date_time}</Info>
      <ComponentIsVisible when={access.type === IType.Entrada}>
        <Info>Entrada</Info>
      </ComponentIsVisible>
      <ComponentIsVisible when={access.type === IType.Saída}>
        <Info>Saída</Info>
      </ComponentIsVisible>
    </Container>
  )
}
