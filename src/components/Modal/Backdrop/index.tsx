import { Container, IContainerProps } from './styles'

interface IComponentBackdropProps extends IContainerProps {
  onClick?: () => void
}

const ComponentBackdrop: React.FC<IComponentBackdropProps> = ({ onClick }) => {
  return <Container onClick={onClick} />
}

export default ComponentBackdrop
