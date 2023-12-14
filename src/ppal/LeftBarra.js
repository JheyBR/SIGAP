import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/LeftBarra.css';

function LeftBarra(props) {
  // Usamos el estado 'hovered' para rastrear si el enlace se está pasando el mouse por encima.
  const [hovered, setHovered] = useState(false);

  // Esta función se ejecuta cuando el mouse entra en el enlace.
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // Esta función se ejecuta cuando el mouse sale del enlace.
  const handleMouseLeave = () => {
    setHovered(false);
  };


  return(
    <Link className="linkLeftBarra" 
          to={props.linkleft}
          onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} >
          <article className="listLeftBarra">
            <img className={`staticiconleft ${hovered ? 'hidden' : ''}`} src={props.iconSTleft} label={props.leftoption}/>
            <img className={`iconLeftBarra ${hovered ? 'visible' : ''}`} src={props.iconleft} label={props.leftoption}/>
            <p className='pListLeftBarra'>{props.leftoption}</p>
          </article>
    </Link>
          
    )
}

  export { LeftBarra }; 

