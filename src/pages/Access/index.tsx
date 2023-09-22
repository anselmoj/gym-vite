import { useCallback, useEffect, useRef } from 'react'
import { useReduxDispatch } from '../../hooks/useReduxDispatch'
import {
  Container,
  ContentContainer,
  CreateAccessButton,
  HeaderContainer,
  Title,
} from './styles'
import { useReduxSelector } from '../../hooks/useReduxSelector'
import AccessItem from './list'
import { accessActions, accessSelectors } from '../../store/slices/access'
import AccessForm, { IAccessFormRefProps } from './form'

export default function AccessList() {
  const reduxDispatch = useReduxDispatch()
  const access = useReduxSelector(accessSelectors.listData)
  const formRef = useRef<IAccessFormRefProps>(null)

  const handleListAccess = useCallback(() => {
    reduxDispatch(
      accessActions.listRequest({
        data: {
          page: 1,
        },
      }),
    )
  }, [reduxDispatch])

  const handleOpenAccess = useCallback(() => {
    formRef.current?.open()
  }, [])

  useEffect(() => {
    handleListAccess()
  }, [handleListAccess])

  return (
    <Container>
      <HeaderContainer>
        <Title>Listagem dos acessos</Title>
        <CreateAccessButton onClick={handleOpenAccess}>
          Liberar atleta
        </CreateAccessButton>
        <AccessForm
          onSubmit={() => {
            //
          }}
          ref={formRef}
        />
      </HeaderContainer>
      <ContentContainer>
        <AccessItem.Header />
        <div>
          {access.map((item, position) => (
            <AccessItem.Body position={position} access={item} key={item.id} />
          ))}
        </div>
      </ContentContainer>
    </Container>
  )
}
