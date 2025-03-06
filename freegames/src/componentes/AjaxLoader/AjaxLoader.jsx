import './AjaxLoader.css';
import imagenLoader from '../../img/ajax-loader.gif';


const AjaxLoader = () => {

    return (
        <div className='aj-div'>
            <figure className="aj-buscando">
                <img src={imagenLoader} alt="ajax-loader"/>
                <figcaption className="aj-buscando">Buscando Free Games</figcaption>
            </figure>

        </div>
    )
}

export default AjaxLoader;