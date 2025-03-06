import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Cabecera from './componentes/Cabecera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera></Cabecera>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/comida/:id" element={<Detalles></Detalles>}></Route> */}

      </Routes>

      {/* <Suspense fallback={"Cargando pie de pagina"}> */}
        {/* <LazyLoad offset={250}> */}
          <Pie></Pie>
        {/* </LazyLoad> */}
      {/* </Suspense> */}
      <ScrollUpDown />
    </>
  )
}

export default App
