import ListaJuegos from "../../componentes/ListaJuegos/ListaJuegos";
import Filtros from "../Filtros/Filtros";
import './Home.css'
import useJuegos from "../../hooks/useJuegos";
import { useState } from "react";

const Home = () => {

    //Me creo los estados que voy a ir pasando por props
    const { juegos, buscando } = useJuegos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    // Filtrar los juegos según la categoría seleccionada
    const juegosFiltrados = categoriaSeleccionada
        ? juegos.filter(juego => juego.categorias === categoriaSeleccionada) //me filtra los juegos que tienen la categoria actual para mostrarlos
        : juegos;

        //Le paso a Filtros todos los datos de juegos y el set del estado para que lo actualice
        //A ListaJuegos le paso los juegos filtrados para que simplemente muestre el contenido de esos juegos
    return (
        <div> 
            <Filtros juegos={juegos} setCategoriaSeleccionada={setCategoriaSeleccionada} />
            <div className="home">
            <ListaJuegos juegos={juegosFiltrados} buscando={buscando}></ListaJuegos>
            </div>
        </div>

    )
}
export default Home;