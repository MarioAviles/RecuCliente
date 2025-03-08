import ListaJuegos from "../../componentes/ListaJuegos/ListaJuegos";
import Filtros from "../Filtros/Filtros";
import './Home.css'
import useJuegos from "../../hooks/useJuegos";
import { useState } from "react";

const Home = () => {

    //Me creo los estados que voy a ir pasando por props
    const { juegos, buscando } = useJuegos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [ordenFecha, setOrdenFecha] = useState("sinOrden");
    const [ordenNota, setOrdenNota] = useState("sinOrden")
    const [keyword, setKeyword] = useState(""); // Estado para la búsqueda

    // Filtrar juegos por categoría
    const juegosFiltrados = juegos.filter(juego => 
        (categoriaSeleccionada ? juego.categorias === categoriaSeleccionada : true) &&
        juego.nombre.toLowerCase().includes(keyword.toLowerCase())
    );

    // Ordenar por fecha
    const juegosOrdenados = ordenFecha
    ? ordenFecha === "reciente" 
        ? [...juegosFiltrados].sort((a, b) => new Date(b.fechaLanzamiento) - new Date(a.fechaLanzamiento))
        : ordenFecha === "antiguo"
            ? [...juegosFiltrados].sort((a, b) => new Date(a.fechaLanzamiento) - new Date(b.fechaLanzamiento))
            : juegosFiltrados
    : juegosFiltrados;

    const juegosOrdenadosNota = ordenNota 
    ? ordenNota === "mayor"
        ? [...juegosOrdenados].sort((a, b) => b.nota - a.nota)
        : ordenNota === "menor"
            ? [...juegosOrdenados].sort((a, b) => a.nota - b.nota)
            : juegosOrdenados // Si es "sinOrden", mantener el orden anterior
    : juegosOrdenados;
    
   
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