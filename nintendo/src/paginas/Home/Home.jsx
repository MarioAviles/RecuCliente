import './Home.css'
import ListaJuegos from "../../componentes/ListaJuegos/ListaJuegos";
import Filtros from "../Filtros/Filtros";
import Buscador from '../../componentes/Buscador/Buscador';
import useJuegos from "../../hooks/useJuegos";
import { useState } from "react";

const Home = () => {

    // Me creo los estados que voy a ir pasando por props
    const { juegos, buscando } = useJuegos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [ordenFecha, setOrdenFecha] = useState("sinOrden");
    const [ordenNota, setOrdenNota] = useState("sinOrden")
    const [keyword, setKeyword] = useState(""); // Texto que el usuario escribe
    const [filtroKeyword, setFiltroKeyword] = useState(""); // Texto que realmente se usa para filtrar

    // PAGINACION ///////////////////////////////////////////////
    
    const [paginaActual, setPaginaActual] = useState(1); // Página actual
    const juegosPorPagina = 10; // Número de juegos por página

    const aplicarBusqueda = () => {
        setFiltroKeyword(keyword); // Actualiza el filtro solo cuando se hace clic en el botón
        setPaginaActual(1);
    };

    // Filtrar juegos por categoría
    const juegosFiltrados = juegos.filter(juego => 
        (categoriaSeleccionada ? juego.categorias === categoriaSeleccionada : true) &&
        juego.nombre.toLowerCase().includes(filtroKeyword.toLowerCase()) // Usamos filtroKeyword aquí
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

    // PAGINACIÓN ///////////////////////////////////////////////
    const totalPaginas = Math.ceil(juegosOrdenadosNota.length / juegosPorPagina);
    const indiceInicio = (paginaActual - 1) * juegosPorPagina;
    const indiceFin = indiceInicio + juegosPorPagina;
    const juegosPaginados = juegosOrdenadosNota.slice(indiceInicio, indiceFin);
    
    function paginaAnterior() {
        setPaginaActual(prev => Math.max(prev - 1, 1));
    }

    function paginaSiguiente() {
        setPaginaActual(prev => Math.min(prev + 1, totalPaginas));
    }

    function irAPagina(pagina) {
        setPaginaActual(pagina);
    }

    //Le paso a Filtros todos los datos de juegos y el set del estado para que lo actualice
    //A ListaJuegos le paso los juegos filtrados para que simplemente muestre el contenido de esos juegos
    return (
        <div> 
            <Filtros juegos={juegos} setCategoriaSeleccionada = {setCategoriaSeleccionada} setOrdenFecha={setOrdenFecha} setOrdenNota={setOrdenNota}/>
            <div className="home">
            <Buscador keyword = {keyword} setKeyword = {setKeyword} aplicarBusqueda = {aplicarBusqueda}></Buscador>
            <ListaJuegos juegos={juegosPaginados} buscando={buscando}></ListaJuegos>
            {/* Paginación */}
            <div className="paginacion">
                    <button onClick={paginaAnterior} disabled={paginaActual === 1}>{"<"}</button>
                    {[...Array(totalPaginas)].map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => irAPagina(i + 1)} 
                            className={paginaActual === i + 1 ? "activo" : ""}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={paginaSiguiente} disabled={paginaActual === totalPaginas}>{">"}</button>
                </div>
            </div>
        </div>

    )
}
export default Home;