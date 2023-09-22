import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import InputBase, { InputBaseRefProps } from '../../components/Input/Base'
import Modal, { IComponentModalBaseRefProps } from '../../components/Modal'
import InputSelect, { InputSelectRefProps } from '../../components/Input/select'
import { Content } from '../../components/Modal/styles'
import {
  Button,
  ContainerButton,
  Form,
  Items,
  ItemsForm,
  Title,
} from './styles'
import { useReduxDispatch } from '../../hooks/useReduxDispatch'
import { athleteActions } from '../../store/slices/athlete'

export interface FormDataProps {
  gym_student_id: number
  type: string
}

export interface IAccessFormRefProps {
  close(): void
  open(): void
  getValue(): FormDataProps
}

interface IProps {
  onSubmit(): void
}

interface IAccessList {
  value: number
  label: string
}

const AccessFormWithRef: ForwardRefRenderFunction<
  IAccessFormRefProps,
  IProps
> = ({ onSubmit }, ref) => {
  const reduxDispatch = useReduxDispatch()
  const componentModalBaseRef = useRef<IComponentModalBaseRefProps>(null)
  const [hideModal, setHideModal] = useState<boolean>(false)
  const inputSelectRef = useRef<InputSelectRefProps>(null)
  const inputTypeRef = useRef<InputBaseRefProps>(null)
  const [infoAccess, setInfoAccess] = useState<IAccessList[]>([])
  console.log('infoAccess', infoAccess)

  const openModal = useCallback(() => {
    setHideModal(false)
    componentModalBaseRef.current?.open()
  }, [])

  const closeModal = useCallback(() => {
    setHideModal(true)
    componentModalBaseRef.current?.close()
  }, [])

  function getFormDataValues(): FormDataProps {
    if (!inputTypeRef.current) {
      throw new Error('inputTypeRef não encontrado')
    }
    if (!inputSelectRef.current) {
      throw new Error('inputSelectRef não encontrado')
    }
    const gymStudentIdValue = inputSelectRef.current.getValue()
    if (gymStudentIdValue === null) {
      throw new Error('gymStudentIdValue nulo')
    }
    return {
      type: inputTypeRef.current.getValue(),
      gym_student_id: gymStudentIdValue[0].value as number,
    }
  }

  async function handleSubmit() {
    try {
      onSubmit()
      closeModal()
    } catch (error) {
      throw new Error('Erro ao liberar atleta')
    }
  }

  const handleLoadAthleteListToSelect = useCallback(() => {
    reduxDispatch(
      athleteActions.selectRequest({
        data: {
          page: 1,
        },
      }),
    )
  }, [reduxDispatch])

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
    getValue: getFormDataValues,
  }))

  useEffect(() => {
    handleLoadAthleteListToSelect()
  }, [handleLoadAthleteListToSelect])

  return (
    <>
      <Modal ref={componentModalBaseRef}>
        <Content className={hideModal ? 'hideModal' : ''} maxWidth={30}>
          <Title>Liberar atleta</Title>
          <Form>
            <ItemsForm>
              <Items>
                <InputSelect
                  ref={inputSelectRef}
                  options={infoAccess}
                  label="Atletas"
                />
              </Items>
              <Items>
                <InputBase label="Entrada / Saída" ref={inputTypeRef} />
              </Items>
            </ItemsForm>

            <ContainerButton>
              <Button
                backgroundColor="#FF0000"
                onClick={closeModal}
                type="button"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                backgroundColor="#4ca35a"
                title="Salvar"
                type="submit"
              >
                Confirmar
              </Button>
            </ContainerButton>
          </Form>
        </Content>
      </Modal>
    </>
  )
}

const AccessForm = forwardRef(AccessFormWithRef)
export default AccessForm
