import './ListaCapitulos.css'
import ajaxLoader from '../../assets/ajax-loader.gif'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ListaCapitulos = (props) => {

    const navigate = useNavigate();

    console.log(props.listaCapitulos)


    return (
        <div className="datos-container">
            {props.buscando && <img src={ajaxLoader} />}

            <div className="capitulos">
                {props.listaCapitulos.length > 0 ? (
                    props.listaCapitulos.map((listaCapitulos) => (
                        <div key={listaCapitulos.id} className="capitulo" onClick={() => navigate(`/capitulo/${listaCapitulos.id}`)}>
                            <h4 className='capitulo-nombre'><strong>{listaCapitulos.nombre}</strong> ({listaCapitulos.episodio})</h4>
                            <p className="capitulo-fecha">{listaCapitulos.fechaLanzamiento}</p>
                            <button className='capitulo-boton'>Ver personajes ({(listaCapitulos.personajes.length)})</button>
                        </div>
                    ))

                ) : (
                    !props.buscando && <p>No hay capitulos disponibles.</p>
                )}
            </div>
        </div >
    )
}
export default ListaCapitulos;