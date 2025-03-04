import letras from '../../mocks/mock-botonera'
import './Botonera.css'

const Botonera = () => {

    function mostrarLetras(letra){
        return <button>{letra}</button>;
    }

    return (
        <div className='botonera'>
            {letras.map(mostrarLetras)}
        </div>
    )
}
export default Botonera;