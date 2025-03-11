import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './paginas/home/Home'
import Cabecera from './componentes/cabecera/Cabecera'
import Detalles from './paginas/detalles/Detalles'
import React, { Suspense } from 'react'
import LazyLoad from 'react-lazy-load'

function App() {

  const Pie = React.lazy(() => import('./componentes/pie/Pie'));

  return (
    <div className="container-fluid">
      <Cabecera></Cabecera>

      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/pokemon/:id' element={<Detalles></Detalles>}></Route>
      </Routes>
      
      <Suspense fallback={"Cargando pie de página"}>
        <LazyLoad offset={250}>
          <Pie></Pie>
        </LazyLoad>
      </Suspense>
    </div>
  )
}

export default App
