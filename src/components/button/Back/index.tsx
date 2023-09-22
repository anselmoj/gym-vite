import { FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { Container } from './styles'

const ComponentButtonBack = (): JSX.Element => {
  const navigate = useNavigate()
  const theme = useTheme()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container onClick={handleGoBack}>
      <FiChevronLeft color={theme.title} size={26} />
    </Container>
  )
}

export default ComponentButtonBack
