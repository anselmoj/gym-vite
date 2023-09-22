import { Container } from './styles'
import { useReduxDispatch } from '../../../hooks/useReduxDispatch'
import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm, { FormRefProps } from '../Form'
import { athleteActions } from '../../../store/slices/athlete'

export default function AthleteCreate() {
  const reduxDispatch = useReduxDispatch()
  const navigate = useNavigate()
  const formRef = useRef<FormRefProps>(null)

  const handleCreateUser = useCallback(async () => {
    try {
      if (formRef.current) {
        const formValues = formRef.current.getValues()
        reduxDispatch(
          athleteActions.createRequest({
            data: formValues,
            onSuccess() {
              navigate('/atletas')
            },
          }),
        )
      }
    } catch (error) {
      throw new Error('Erro ao criar atleta')
    }
  }, [navigate, reduxDispatch])

  return (
    <Container>
      <UserForm
        title="Adicionar atleta"
        onSubmit={handleCreateUser}
        ref={formRef}
      />
    </Container>
  )
}
