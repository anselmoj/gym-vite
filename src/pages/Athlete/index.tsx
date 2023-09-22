import { useCallback, useEffect, useRef } from 'react'
import { useReduxDispatch } from '../../hooks/useReduxDispatch'
import AthleteItem from './list'
import {
  Container,
  ContentContainer,
  CreateAthleteButton,
  HeaderContainer,
  Title,
} from './styles'
import { useReduxSelector } from '../../hooks/useReduxSelector'
import { useNavigate } from 'react-router-dom'
import { athleteActions, athleteSelectors } from '../../store/slices/athlete'
import AthleteEnable, { IAthleteEnableRefProps } from './Enable'
import IAthlete from '../../models/Athlete'
import AthleteDisable, { IAthleteDisableRefProps } from './Disable'

export default function AthleteList() {
  const navigate = useNavigate()
  const reduxDispatch = useReduxDispatch()
  const athletes = useReduxSelector(athleteSelectors.listData)
  const enableAthleteRef = useRef<IAthleteEnableRefProps>(null)
  const disableAthleteRef = useRef<IAthleteDisableRefProps>(null)

  const handleListAthlete = useCallback(() => {
    reduxDispatch(
      athleteActions.listRequest({
        data: {
          page: 1,
        },
      }),
    )
  }, [reduxDispatch])

  const handleOpenEdit = useCallback(
    (id: number) => {
      navigate(`/atletas/${id}/editar`)
    },
    [navigate],
  )

  const handleOpenCreate = useCallback(() => {
    navigate(`/atletas/criar`)
  }, [navigate])

  const handleOpenEnableAthlete = useCallback((data: IAthlete) => {
    enableAthleteRef.current?.open(data)
  }, [])

  const handleOpenDisableAthlete = useCallback((data: IAthlete) => {
    disableAthleteRef.current?.open(data)
  }, [])

  useEffect(() => {
    handleListAthlete()
  }, [handleListAthlete])

  return (
    <Container>
      <HeaderContainer>
        <Title>Listagem de atletas</Title>
        <CreateAthleteButton onClick={handleOpenCreate}>
          Adicionar
        </CreateAthleteButton>
      </HeaderContainer>
      <ContentContainer>
        <AthleteItem.Header />
        <div>
          {athletes.map((athlete, position) => (
            <AthleteItem.Body
              openDisable={handleOpenDisableAthlete}
              openEnable={handleOpenEnableAthlete}
              position={position}
              openEdit={() => handleOpenEdit(athlete.id)}
              athlete={athlete}
              key={athlete.id}
            />
          ))}
        </div>
      </ContentContainer>
      <AthleteEnable
        reloadAthletes={handleListAthlete}
        ref={enableAthleteRef}
      />
      <AthleteDisable
        reloadAthletes={handleListAthlete}
        ref={disableAthleteRef}
      />
    </Container>
  )
}
