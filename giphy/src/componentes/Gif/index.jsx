import { Link } from "wouter";
import "./styles.css"

const Gif = (props) => {
    return (
        <Link to={`/gif/${props.id}`}>
          <figure className="figura">
          <img src={props.url} 
                  alt ='Gif'>
          </img>
          <figcaption>{props.title}</figcaption>
        </figure>
      </Link>
   )
}

export default Gif;