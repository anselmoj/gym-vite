import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import { Container } from './styles'
import ComponentIsVisible from '../utils/IsVisible'
import ComponentBackdrop from './Backdrop'

export interface IComponentModalBaseRefProps {
  close(): void
  open(): void
}

interface IComponentModalBaseProps {
  children: ReactNode
  closeOnBackdropClick?: boolean
  hideBackdrop?: boolean
}

const ModalWithRef: React.ForwardRefRenderFunction<
  IComponentModalBaseRefProps,
  IComponentModalBaseProps
> = ({ children, closeOnBackdropClick = true, hideBackdrop = false }, ref) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  const closeModal = useCallback(() => {
    const animated = document.getElementById('modalContent')
    if (animated) {
      animated.addEventListener('animationend', () => {
        setIsOpened(false)
      })
    }
  }, [])

  const closeWithoutAnimation = useCallback(() => {
    if (closeOnBackdropClick) {
      setIsOpened(false)
    }
  }, [closeOnBackdropClick])

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }))

  useHotkeys('esc', () => closeWithoutAnimation())

  const body = document.getElementById('mainBody')

  useEffect(() => {
    if (body && isOpened) {
      body.classList.add('overflowHidden')
    }
    return () => {
      body?.classList.remove('overflowHidden')
    }
  }, [body, isOpened])

  return (
    <ComponentIsVisible when={isOpened}>
      <Container>
        <ComponentIsVisible when={!hideBackdrop}>
          <ComponentBackdrop onClick={closeWithoutAnimation} />
        </ComponentIsVisible>
        {children}
      </Container>
    </ComponentIsVisible>
  )
}

const Modal = forwardRef(ModalWithRef)
export default Modal
