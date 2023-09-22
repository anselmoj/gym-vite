import { ButtonHTMLAttributes } from 'react'

import ComponentIsVisible from '../../utils/IsVisible'
import { Container, IContainerProps } from './styles'

interface IButtonProps
  extends IContainerProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const ComponentButtonBase: React.FC<IButtonProps> = ({
  backgroundColor,
  borderRadius,
  children,
  color,
  disabled,
  height,
  isLoading = false,
  marginTop,
  type = 'button',
  width,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      disabled={disabled}
      height={height}
      marginTop={marginTop}
      type={type}
      width={width}
      {...props}
    >
      <ComponentIsVisible when={!isLoading}>{children}</ComponentIsVisible>
    </Container>
  )
}

export default ComponentButtonBase
