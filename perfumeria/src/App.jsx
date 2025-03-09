import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from '../../nintendo/src/componentes/Pie/Pie';
import LazyLoad from 'react-lazy-load'
import { Suspense } from 'react';

function App() {

  return (
    <>
      <Cabecera></Cabecera>

      {/* <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/juego/:id" element={<Detalle></Detalle>}></Route>

      </Routes> */}

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
