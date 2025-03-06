import React from 'react';
import letras from '../../mocks/mock-botonera';
import './Botonera.css';

const Botonera = (props) => {
    return (
        <div className='botonera'>
            {letras.map((letra) => (
                <button className="boton" key={letra} onClick={() => props.obtenerRecetas(letra)}>
                    {letra}
                </button>
            ))}
        </div>
    );
}

export default Botonera;
