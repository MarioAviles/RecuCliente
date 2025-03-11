import './ScrollUp.css'

const ScrollUp = () => {

    // Función para hacer scroll hacia arriba
    function scrollup() {

        // Con window.scrollTo(0, 0) hacemos scroll hacia arriba siendo el primer 0 el eje X (Derecha, Izquierda).

        window.scrollTo(0, 0);
    }

    // Función para hacer scroll hacia abajo


    return (
        <div>
            <span className="ir-arriba"
                id="button-up"
                onClick={scrollup}>^
            </span>
        </div>
    )

}

export default ScrollUp;