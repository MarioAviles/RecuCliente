import logo from '../../img/logo.png';
import {Link } from 'wouter';

const Logo = () => {

    return (

        <Link to="/" className="enlace"> 
            <figure className="App-logo">
            <img alt="Giffy logo" 
                 src={logo} />
            </figure>
        </Link>
    )
}

export default Logo;