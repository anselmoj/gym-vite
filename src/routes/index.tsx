import { Route, Routes } from 'react-router-dom'
import AthleteList from '../pages/Athlete'
import AthleteCreate from '../pages/Athlete/Create'
import AthleteEdit from '../pages/Athlete/Edit'
import AccessList from '../pages/Access'

const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AthleteList />} path="/atletas" />
      <Route element={<AthleteCreate />} path="/atletas/criar" />
      <Route element={<AthleteEdit />} path="/atletas/:id/editar" />
      <Route element={<AccessList />} path="/acessos" />
    </Routes>
  )
}

export default MainRoutes
