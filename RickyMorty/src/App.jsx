import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cabecera from './componentes/Cabecera/Cabecera'
import Menu from './componentes/Menu/Menu'
import Home from './paginas/Home/Home'
import Personajes from './paginas/Personajes/Personajes'
import Planetas from './paginas/Planetas/Planetas'
import Capitulos from './paginas/Capitulos/Capitulos'
import PersonajesCapitulo from './paginas/PersonajesCapitulo/PersonajesCapitulo'

function App() {

  return (
    <>
      <Cabecera></Cabecera>
      <Menu></Menu>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/personajes" element={<Personajes></Personajes>}></Route>
        <Route path="/planetas" element={<Planetas></Planetas>}></Route>
        <Route path="/capitulos" element={<Capitulos></Capitulos>}></Route>
        <Route path="/capitulo/:cap" element={<PersonajesCapitulo></PersonajesCapitulo>}></Route>

      </Routes>
    </>
  )
}

export default App
