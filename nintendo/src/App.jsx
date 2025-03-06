import {Routes, Route} from 'react-router-dom'
import Cabecera from './componentes/Cabecera/Cabecera'
import Home from './paginas/Home/Home'
import LazyLoad from 'react-lazy-load'
import { Suspense } from 'react';
import React from 'react'

function App() {

  const Pie = React.lazy ( () => import('./componentes/Pie/Pie'))

  return (
    <>
      <Cabecera></Cabecera>

      <Routes>

        <Route path="/" element={<div><Home></Home>
          </div>}></Route>
        {/* <Route path="/comida/:id" element={<Detalles></Detalles>}></Route> */}

      </Routes>

      <Suspense fallback={"Cargando pie de pagina"}>
        <LazyLoad offset={250}>
          <Pie></Pie>
        </LazyLoad>
      </Suspense>
      {/* <ScrollUpDown /> */}
    </>
  )
}

export default App
