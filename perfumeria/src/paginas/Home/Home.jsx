import ListaPerfumes from "../../componentes/ListaPerfumes/ListaPerfumes"
import Filtros from "../Filtros/Filtros";
import usePerfumes from "../../hooks/usePerfumes"
import { useState } from "react";

const Home = () => {

    const { perfumes, buscando } = usePerfumes();
    const [marcaSeleccionada, setMarcaSeleccionada] = useState("");
    
    const perfumesFiltradosMarca = perfumes.filter(perfume => 
        (marcaSeleccionada ? perfume.marca === marcaSeleccionada : true) // Usamos filtroKeyword aquí
    );

    return (
        <div>
            <Filtros perfumes = {perfumes} setMarcaSeleccionada={setMarcaSeleccionada}></Filtros>
            <div className="home">
                <ListaPerfumes perfumes = {perfumesFiltradosMarca} buscando = {buscando}></ListaPerfumes>
            </div>
        </div>
    )
}
export default Home;