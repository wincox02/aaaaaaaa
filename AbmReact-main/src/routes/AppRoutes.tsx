import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import { Empleados } from "../pages/Empleados"


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/componentes' element={<Componentes/>}> </Route>
        <Route path='/empleados' element={<Empleados/>}> </Route>
        
    </Routes>
  )
}

export default AppRoutes