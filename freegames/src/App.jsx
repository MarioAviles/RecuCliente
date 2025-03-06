import React from 'react';
import './App.css';

// -- Páginas -------------------------------------------------
import Cabecera from './paginas/Cabecera';
import Contenido from './paginas/Contenido';


function App() {

  return (
    <div className="App">      
      <Cabecera></Cabecera>
      <Contenido></Contenido>
    </div>
  );
}

export default App;
