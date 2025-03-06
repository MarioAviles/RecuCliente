import './ScrollUp.css';

const ScrollUp = () => {
    
    function scrollup() {
        
        window.scrollTo(0,0);
    }

    return(
        <span className="ir-arriba" 
              id="button-down" 
              onClick={scrollup}>^
        </span>
    )
    
}

export default ScrollUp;