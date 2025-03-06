import "./Juego.css";

const Juego = (props) => {
    
    function reverseString(str) {
        return str.split("-").reverse().join("-");
    }

    const lanzamiento = reverseString(props.juego.release_date);

    return (
        <figure className="figura">
            <img src={props.juego.thumbnail} alt='Juego'></img>
            <figcaption>{props.juego.title}</figcaption>
            <div className="ju-plataforma">
                <p><span className="ju-destacado">Plataforma. </span>{props.juego.platform}</p>
                <p><span className="ju-destacado">Lanzamiento. </span>{lanzamiento}</p>
                <p><span className="ju-destacado">Genero. </span>{props.juego.genre}</p>
            </div>
            <a className="ju-url" href={props.juego.freetogame_profile_url} target="blank"> Descargatelo</a>
        </figure>
    )
}

export default Juego;