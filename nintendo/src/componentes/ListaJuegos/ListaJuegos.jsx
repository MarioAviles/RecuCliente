import useJuegos from "../../hooks/useJuegos";

const ListaJuegos = () => {

    const { juegos } = useJuegos()

    function mostrarJuegos(juego) {
        return juego.nombre
    }

    return (
        <div>
            {juegos.map(mostrarJuegos)}
        </div>
    )
}
export default ListaJuegos;