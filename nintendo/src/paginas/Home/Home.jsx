import ListaJuegos from "../../componentes/ListaJuegos/ListaJuegos";
import Filtros from "../Filtros/Filtros";
import './Home.css'
import useJuegos from "../../hooks/useJuegos";
import { useState } from "react";

const Home = () => {

    const { juegos, buscando } = useJuegos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    // Filtrar los juegos según la categoría seleccionada
    const juegosFiltrados = categoriaSeleccionada
        ? juegos.filter(juego => juego.categorias === categoriaSeleccionada)
        : juegos;

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