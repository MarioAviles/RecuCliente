import Cabecera from './componentes/Cabecera/Cabecera'
import Home from './paginas/Home/Home'
import Detalles from './paginas/Detalles/Detalles'
import useRecetas from './hooks/useRecetaId';
import { Routes, Route } from 'react-router-dom';
import LazyLoad from 'react-lazy-load'
import { Suspense } from 'react';
import React from 'react';
// import Pie from './componentes/Pie/Pie';

const Pie = React.lazy ( () => import('./componentes/Pie/Pie'))

function App() {
  const {recetas} = useRecetas()

  return (
    <>
      <Cabecera></Cabecera>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/comida/:id" element={<Detalles></Detalles>}></Route>

      </Routes>

      <Suspense fallback={"Cargando pie de pagina"}>
        <LazyLoad offset={250}>
          <Pie></Pie>
        </LazyLoad>
      </Suspense>
    </>
  )
}

export default App
