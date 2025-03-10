import './Home.css'
import ListaPerfumes from "../../componentes/ListaPerfumes/ListaPerfumes"
import Filtros from "../Filtros/Filtros";
import Buscador from '../../componentes/Buscador/Buscador';
import usePerfumes from "../../hooks/usePerfumes"
import { useState } from "react";

const perfumesPorPagina = 20;

const Home = () => {

    const { perfumes, buscando } = usePerfumes();
    const [marcaSeleccionada, setMarcaSeleccionada] = useState("");
    const [keyword, setKeyword] = useState(""); // Texto que el usuario escribe
    const [filtroKeyword, setFiltroKeyword] = useState(""); // Texto que realmente se usa para filtrar
    
    
    const aplicarBusqueda = () => {
        setFiltroKeyword(keyword); // Actualiza el filtro solo cuando se hace clic en el botón
    };

    const perfumesFiltradosMarca = perfumes.filter(perfume => 
        (marcaSeleccionada ? perfume.marca === marcaSeleccionada : true) &&
        perfume.nombre.toLowerCase().includes(filtroKeyword.toLowerCase()) // Usamos filtroKeyword aquí
    );

    return (
        <div>
            <Filtros perfumes = {perfumes} setMarcaSeleccionada={setMarcaSeleccionada}></Filtros>
            <div className="home">
                <Buscador keyword = {keyword} setKeyword = {setKeyword} aplicarBusqueda = {aplicarBusqueda}></Buscador>
                <ListaPerfumes perfumes = {perfumesFiltradosMarca} buscando = {buscando}></ListaPerfumes>
            </div>
        </div>
    )
}
export default Home;