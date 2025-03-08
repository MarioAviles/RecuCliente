import ListaJuegos from "../../componentes/ListaJuegos/ListaJuegos";
import Filtros from "../Filtros/Filtros";
import './Home.css'
import useJuegos from "../../hooks/useJuegos";
import { useState } from "react";

const Home = () => {

    //Me creo los estados que voy a ir pasando por props
    const { juegos, buscando } = useJuegos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [ordenFecha, setOrdenFecha] = useState("reciente");
    const [orderNota, setOrdenNota] = useState("mayor")

    // Filtrar juegos por categoría
    const juegosFiltrados = categoriaSeleccionada
        ? juegos.filter(juego => juego.categorias === categoriaSeleccionada)
        : juegos;

    // Ordenar por fecha
    const juegosOrdenados = [...juegosFiltrados].sort((a, b) => {
        return ordenFecha === "reciente"
            ? new Date(b.fechaLanzamiento) - new Date(a.fechaLanzamiento) // Más reciente primero
            : new Date(a.fechaLanzamiento) - new Date(b.fechaLanzamiento); // Más antiguo primero
    });

    const juegosOrdenadosNota = [...juegosOrdenados].sort((a, b) => {
        return orderNota === "mayor"
            ? (b.nota) - (a.nota) // Mayor primero
            : (a.nota) - (b.nota); // Menor primero
    });
   
    //Le paso a Filtros todos los datos de juegos y el set del estado para que lo actualice
    //A ListaJuegos le paso los juegos filtrados para que simplemente muestre el contenido de esos juegos
    return (
        <div> 
            <Filtros juegos={juegos} setCategoriaSeleccionada = {setCategoriaSeleccionada} setOrdenFecha={setOrdenFecha} setOrdenNota={setOrdenNota}/>
            <div className="home">
            <ListaJuegos juegos={juegosOrdenadosNota} buscando={buscando}></ListaJuegos>
            </div>
        </div>

    )
}
export default Home;