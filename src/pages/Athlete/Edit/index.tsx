import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from './styles'
import { useReduxDispatch } from '../../../hooks/useReduxDispatch'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm, { FormRefProps } from '../Form'
import { useReduxSelector } from '../../../hooks/useReduxSelector'
import { athleteActions, athleteSelectors } from '../../../store/slices/athlete'
import IAthlete from '../../../models/Athlete'

export default function AthleteEdit() {
  const reduxDispatch = useReduxDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const formRef = useRef<FormRefProps>(null)
  const athletes = useReduxSelector(athleteSelectors.showData)
  const [currentAthlete, setCurrentAthlete] = useState<IAthlete>({} as IAthlete)

  const handleGetAthlete = useCallback(() => {
    if (params.id) {
      reduxDispatch(
        athleteActions.showRequest({
          data: {
            id: Number(params.id),
          },
        }),
      )
    }
  }, [params.id, reduxDispatch])

  const handleEditAthlete = useCallback(async () => {
    try {
      if (formRef.current) {
        const formValues = formRef.current.getValues()
        reduxDispatch(
          athleteActions.editRequest({
            data: formValues,
            id: Number(params.id),
            onSuccess() {
              navigate('/atletas')
            },
          }),
        )
      }
    } catch (error) {
      throw new Error('Erro ao editar atleta')
    }
  }, [navigate, params.id, reduxDispatch])

  useEffect(() => {
    handleGetAthlete()
  }, [handleGetAthlete])

  useEffect(() => {
    if (athletes !== null) {
      setCurrentAthlete(athletes)
    }
  }, [athletes])

  return (
    <Container>
      <UserForm
        initialData={{
          gender: currentAthlete.gender,
          name: currentAthlete.name,
        }}
        title="Editar atleta"
        onSubmit={handleEditAthlete}
        ref={formRef}
      />
    </Container>
  )
}
