import ListaPerfumes from "../../componentes/ListaPerfumes/ListaPerfumes"
import usePerfumes from "../../hooks/usePerfumes"
import { useState } from "react";

const Home = () => {

    const { perfumes, buscando } = usePerfumes();
    const [marcaSeleccionada, setMarcaSeleccionada] = useState("");
    
    const perfumesFiltradosMarca = perfumes.filter(perfume => 
        (marcaSeleccionada ? perfume.categoria === marcaSeleccionada : true) // Usamos filtroKeyword aquí
    );

    return (
        <div>
            <ListaPerfumes perfumes = {perfumesFiltradosMarca} buscando = {buscando}></ListaPerfumes>
        </div>
    )
}
export default Home;