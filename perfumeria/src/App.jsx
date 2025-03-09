import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from './componentes/Pie/Pie'
import Home from './paginas/Home/Home'
import Detalle from './paginas/Detalle/Detalle'
import ScrollUpDown from './componentes/ScrollUpDown/ScrollUpDown'
import LazyLoad from 'react-lazy-load'
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Cabecera></Cabecera>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/perfume/:id" element={<Detalle></Detalle>}></Route>

      </Routes>

      <Suspense fallback={"Cargando pie de pagina"}>
        <LazyLoad offset={250}>
          <Pie></Pie>
        </LazyLoad>
      </Suspense>
      <ScrollUpDown />
    </>
  )
}

export default App
