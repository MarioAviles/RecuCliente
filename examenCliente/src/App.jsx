import Cabecera from './componentes/Cabecera/Cabecera'
import Home from './paginas/Home/Home'
import Detalles from './paginas/Detalles/Detalles'
import Pie from './componentes/Pie/Pie'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Cabecera></Cabecera>

      <Routes>

        <Route path = "/" element={<Home></Home>}></Route>
        <Route path = "/comida" element={<Detalles></Detalles>}></Route>

      </Routes>

      <Pie></Pie>
    </>
  )
}

export default App
