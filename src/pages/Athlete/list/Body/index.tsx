import { Check, PencilLine, X } from '@phosphor-icons/react'
import {
  ActionContainer,
  Info,
  Container,
  StyledLink,
  ButtonActions,
} from './styles'
import IAthlete from '../../../../models/Athlete'
import ComponentIsVisible from '../../../../components/utils/IsVisible'

interface IProps {
  athlete: IAthlete
  openEdit: (data: IAthlete) => void
  openEnable: (data: IAthlete) => void
  openDisable: (data: IAthlete) => void
  position: number
}

enum IGender {
  'Masculino' = 'M',
  'Feminino' = 'F',
}

export default function AthleteList({
  athlete,
  openEdit,
  openEnable,
  openDisable,
  position,
}: IProps) {
  return (
    <Container addColorRow={position % 2 === 0}>
      <Info>{athlete.id}</Info>
      <Info>{athlete.name}</Info>
      <ComponentIsVisible when={athlete.gender === IGender.Masculino}>
        <Info>Masculino</Info>
      </ComponentIsVisible>
      <ComponentIsVisible when={athlete.gender === IGender.Feminino}>
        <Info>Feminino</Info>
      </ComponentIsVisible>
      <ComponentIsVisible when={athlete.is_active === true}>
        <Info>Ativo</Info>
      </ComponentIsVisible>
      <ComponentIsVisible when={athlete.is_active === false}>
        <Info>Inativo</Info>
      </ComponentIsVisible>

      <ActionContainer>
        <ComponentIsVisible when={athlete.is_active === false}>
          <ButtonActions onClick={() => openEnable(athlete)} title="Ativar">
            <Check size={22} color="#32CD32" />
          </ButtonActions>
        </ComponentIsVisible>
        <ComponentIsVisible when={athlete.is_active === true}>
          <ButtonActions onClick={() => openDisable(athlete)} title="Inativar">
            <X size={22} color="#880808" />
          </ButtonActions>
        </ComponentIsVisible>
        <ButtonActions onClick={() => openEdit(athlete)} title="Editar">
          <StyledLink>
            <PencilLine size={22} />
          </StyledLink>
        </ButtonActions>
      </ActionContainer>
    </Container>
  )
}
