import React, { useState } from 'react';
import './css/CardDashBoard.css';
import {Link } from 'react-router-dom';

function CardDashBoard(props) {
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


  return (
   
    <Link className="linkCardDashBoard" to={props.linkcard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <article className="CardDashBoard">
          <img className={`staticImgCard ${hovered ? 'hidden' : ''}`} src={props.iconStcard} label={props.titlecard} />
          <img className={`imgCardDashBoard ${hovered ? 'visible' : ''}`}  src={props.iconcard} label={props.titlecard} />
          <h2 className="titleCardDashBoard">{props.titlecard}</h2>
          <p className="pCardDashBoard">{props.subtitlecard}</p>
        </article>
    </Link>
   
   
     
  );
}


 {/*}   <Link className="linkCardDashBoard" to="/todos"> {/* Cambio el enlace a /todos */}
   

export { CardDashBoard };
