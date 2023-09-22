import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import Alert from '../../../components/Alert'

import { useReduxDispatch } from '../../../hooks/useReduxDispatch'
import IAthlete from '../../../models/Athlete'
import Modal, { IComponentModalBaseRefProps } from '../../../components/Modal'
import { athleteActions } from '../../../store/slices/athlete'
import { Content } from '../../../components/Modal/styles'

export interface IAthleteDisableRefProps {
  open(data: IAthlete): void
}

interface IAthleteDisableProps {
  reloadAthletes(): void
}

const AthleteDisableWithRef: React.ForwardRefRenderFunction<
  IAthleteDisableRefProps,
  IAthleteDisableProps
> = ({ reloadAthletes }, ref) => {
  const reduxDispatch = useReduxDispatch()
  const [hideModal, setHideModal] = useState<boolean>(false)
  const [athleteValues, setAthleteValues] = useState<IAthlete>({} as IAthlete)
  const componentModalBaseRef = useRef<IComponentModalBaseRefProps>(null)
  const openModal = useCallback((data: IAthlete) => {
    setHideModal(false)
    setAthleteValues(data)
    componentModalBaseRef.current?.open()
  }, [])

  const closeModal = useCallback(() => {
    setHideModal(true)
    componentModalBaseRef.current?.close()
  }, [])

  const handleDisableAthlete = useCallback(() => {
    reduxDispatch(
      athleteActions.disableRequest({
        data: {
          id: athleteValues.id,
        },
        functions: {
          success: () => {
            reloadAthletes()
            closeModal()
          },
        },
      }),
    )
  }, [athleteValues.id, closeModal, reduxDispatch, reloadAthletes])

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }))

  return (
    <Modal closeOnBackdropClick={false} ref={componentModalBaseRef}>
      <Content className={hideModal ? 'hideModal' : ''} maxWidth={30}>
        <Alert
          isLoading={false}
          athlete={athleteValues}
          onClose={closeModal}
          onSubmit={handleDisableAthlete}
          title="Deseja inativar este atleta?"
        />
      </Content>
    </Modal>
  )
}

const AthleteDisable = forwardRef(AthleteDisableWithRef)
export default AthleteDisable
