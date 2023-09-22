import { Info, Container } from './styles'
import ComponentIsVisible from '../../../../components/utils/IsVisible'
import IAccess from '../../../../models/Access'
import date from '../../../../formatters/date'
import EType from '../../../../enums/Type'

interface IProps {
  access: IAccess
  position: number
}

export default function AccessList({ access, position }: IProps) {
  const dateFormatted = date(access.date_time)

  return (
    <Container addColorRow={position % 2 === 0}>
      <Info>{access.gym_student.name}</Info>
      <Info>{dateFormatted}</Info>
      <ComponentIsVisible when={access.type === EType.Entrada}>
        <Info>Entrada</Info>
      </ComponentIsVisible>
      <ComponentIsVisible when={access.type === EType.Saída}>
        <Info>Saída</Info>
      </ComponentIsVisible>
    </Container>
  )
}
