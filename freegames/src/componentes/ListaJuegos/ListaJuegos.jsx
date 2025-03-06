import "./ListaJuegos.css";
import {useContext } from 'react';


// Componentes -----------------------------------------------------------
import AjaxLoader from '../AjaxLoader/AjaxLoader.jsx';
import Juego from '../Juego/Juego';

// Contextos -------------------------------------------------------------
import OrdenContext from "../../contexto/OrdenContext";
import GeneroContext from "../../contexto/GeneroContext.jsx";
import PlataformaContext from "../../contexto/PlataformaContext.jsx";

// CustomHooks -------------------------------------------------
import useJuegos from "../../hooks/useJuegos";

const ListaJuegos = () => {

    const listaJuegos = useJuegos();

    const genero = useContext(GeneroContext);
    const plataforma =  useContext(PlataformaContext);
    const orden = useContext(OrdenContext)    

    // Función encargada de llamar al componente Personaje con el personaje
    // que recibe como parámetro implícito de la función map
    function muestraJuego(juego) { 
    return <Juego  key={juego.id} juego={juego}></Juego>;
    }

    function filtrarJuego(juego) {

        if (genero==="Todos") return juego
        else return juego.genre === genero;
    }

    function filtrarPlataforma(juego) {

        if (plataforma==="Todos") return juego
        else return juego.platform === plataforma;

    }

    function ordenarAZ(a,b) {

        if (a.props.juego.title > b.props.juego.title) {
            return  1;
        }
        if (a.props.juego.title < b.props.juego.title) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    function ordenarZA(a,b) {

        if (a.props.juego.title > b.props.juego.title) {
            return  -1;
        }
        if (a.props.juego.title < b.props.juego.title) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }


    return(
        <>
            {listaJuegos.buscando ? <AjaxLoader></AjaxLoader> : "" }
            {orden==="A"? listaJuegos.juegos.filter(filtrarJuego).filter(filtrarPlataforma).map(muestraJuego).sort(ordenarAZ)
                        : listaJuegos.juegos.filter(filtrarJuego).filter(filtrarPlataforma).map(muestraJuego).sort(ordenarZA)}
        </>
    )
}

export default ListaJuegos;