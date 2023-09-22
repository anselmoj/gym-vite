import ComponentMenu from './components/menu'
import MainRoutes from './routes'
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <ComponentMenu />
        <MainRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
