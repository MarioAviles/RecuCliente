import './Capitulos.css'
import useTodosCapitulos from '../../hooks/useTodosCapitulos';
import Filtros from '../../componentes/Filtros/Filtros';
import ListaCapitulos from '../../componentes/ListaCapitulos/ListaCapitulos';
import ScrollUp from '../../componentes/ScrollUp/ScrollUp';
import { useState } from 'react';
import { useEffect } from 'react';

const Capitulos = () => {

    const { buscando, listaCapitulos, setPage } = useTodosCapitulos();
    const [mesSeleccionado, setMesSeleccionado] = useState("Todos");
    const [cantidadPersonajes, setCantidadPersonajes] = useState();
    const [capitulosFiltradosMes, setCapitulosFiltradosMes] = useState([]);
    const [capitulosFiltradosPersonajes, setCapitulosFiltradosPersonajes] = useState([]);



    // const capitulosFiltradosMes = listaCapitulos.filter(capitulo =>
    //     (mesSeleccionado !== "Todos" ? capitulo.fechaLanzamiento.includes(mesSeleccionado) : capitulo.fechaLanzamiento));


    function filtrarPorMes() {
        if (mesSeleccionado === "Todos") {
            setCapitulosFiltradosMes(listaCapitulos)
        } else {
            setCapitulosFiltradosMes (listaCapitulos.filter(capitulo =>
                (capitulo.fechaLanzamiento.includes(mesSeleccionado))));
        }
    }

    // function filtrarPorCantidadPersonajes() {
    //     if (cantidadPersonajes === "Con al menos 1 personaje")
    //         setCapitulosFiltradosPersonajes(capitulosFiltradosMes)
    //     } else {
    //         setCapitulosFiltradosPersonajes(listaCapitulos.filter(capitulo =>
    //             (capitulo.personajes.length > 1)))
    //     }

    useEffect(filtrarPorMes, [mesSeleccionado, listaCapitulos]);

    function manejarMesSeleccionado(mes) {
        setMesSeleccionado(mes)
    }

    function manejarPersonajesSeleccionados(personajes) {
        setCantidadPersonajes(personajes)
    }


    return (
        <div>
            <Filtros listaCapitulos={listaCapitulos} manejarMesSeleccionado={manejarMesSeleccionado} manejarPersonajesSeleccionados={manejarPersonajesSeleccionados}></Filtros>
            <ListaCapitulos buscando={buscando} listaCapitulos={capitulosFiltradosMes}></ListaCapitulos>
            <ScrollUp></ScrollUp>

        </div>
    )
}
export default Capitulos;