import { useNavigate } from 'react-router-dom'
import { MenuItem, Container } from './styles'
import { useCallback } from 'react'

const ComponentMenu: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(
    (page: string) => {
      navigate(page)
    },
    [navigate],
  )

  return (
    <Container>
      <MenuItem onClick={() => handleNavigate('/atletas')}>Atletas</MenuItem>
      <MenuItem onClick={() => handleNavigate('/acessos')}>Acessos</MenuItem>
    </Container>
  )
}

export default ComponentMenu
