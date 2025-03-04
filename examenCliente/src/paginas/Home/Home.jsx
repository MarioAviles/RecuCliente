import Botonera from "../../componentes/Botonera/Botonera";
import Datos from "../../componentes/Datos/Datos";
import useRecetas from "../../hooks/useRecetas";

const Home = () => {

    const { recetas, buscando, obtenerRecetas } = useRecetas();

    return (
        <>
            <Botonera obtenerRecetas={obtenerRecetas}></Botonera>
            <Datos recetas={recetas} buscando={buscando}></Datos>
        </>
    )
}
export default Home;