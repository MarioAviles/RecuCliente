import React, {useState} from 'react';

// -- Componentes -------------------------------------------------
import ScrollUp from '../componentes/ScrollUp/ScrollUp';

// Páginas --------------------------------------------------------
import Datos from '../paginas/Datos';
import Selectores from '../paginas/Selectores';

// -- Contextos ---------------------------------------------------
import OrdenContext from '../contexto/OrdenContext';
import GeneroContext from "../contexto/GeneroContext.jsx";
import PlataformaContext from "../contexto/PlataformaContext.jsx";


const Contenido = () => {

    const [generoElegido, setGeneroElegido] =  useState("Todos");
    const [plataformaElegida, setPlataformaElegida] = useState("Todos");
    const [ordenElegido, setOrdenElegido] = useState("A");
  
    function manejarSeleccionGenero(genero) {
  
      setGeneroElegido(genero);
    }
    
    function manejarSeleccionPlataforma(plataforma) {
  
      setPlataformaElegida(plataforma);
    }
  
    function manejarOrdenacion(orden) {
  
      setOrdenElegido(orden);
    }
    
    return (

        <section className="contenido">

            <ScrollUp></ScrollUp>            
            
            /** Paso de datos al componente NIETO por contexto*/
            <GeneroContext.Provider value={generoElegido}>
                <PlataformaContext.Provider value={plataformaElegida}>
                    <OrdenContext.Provider value={ordenElegido}>
                        <Datos></Datos>
                    </OrdenContext.Provider>    
                </PlataformaContext.Provider>
            </GeneroContext.Provider>

            /** Paso de datos al componente NIETO por props*/
            <Selectores manejarOrdenacion          = {manejarOrdenacion}
                        manejarSeleccionGenero     = {manejarSeleccionGenero}
                        manejarSeleccionPlataforma = {manejarSeleccionPlataforma}
                        generoElegido     = {generoElegido}
                        plataformaElegida = {plataformaElegida}
                        ordenElegido      = {ordenElegido}>                    
            </Selectores>

      </section>          


    )

}

export default Contenido;
