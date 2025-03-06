import { useEffect } from "react";
import Botonera from "../../componentes/Botonera/Botonera";
import Datos from "../../componentes/Datos/Datos";
import FiltroArea from "../../componentes/FiltroArea/FiltroArea";
import useRecetas from "../../hooks/useRecetas";
import { useState } from "react";

const Home = () => {

    const { recetas, buscando, obtenerRecetas } = useRecetas();

    const [areaElegida, setAreaElegida] = useState("Todas");

    const [recetasFiltradas, setRecetasFiltradas] = useState([]);

    function filtrarPorArea() {
        if (areaElegida === "Todas") {
            setRecetasFiltradas(recetas)
        } else {
            setRecetasFiltradas(recetas.filter(receta => receta.area === areaElegida))
        }
    }

    useEffect(filtrarPorArea, [areaElegida, recetas]);

    function manejarAreaSeleccionada(area) {
        setAreaElegida(area)
    }

    return (
        <>
            <Botonera obtenerRecetas={obtenerRecetas}></Botonera>
            <FiltroArea manejarAreaSeleccionada={manejarAreaSeleccionada}></FiltroArea>
            <Datos recetas={recetasFiltradas} buscando={buscando}></Datos>
        </>
    )
}
export default Home;