import React from 'react';
//import '../../App.css';
import '../ToDos.css';
import './TodosError.css';




function TodosError(props) {
   
 

   return (
    <article className="sklLoading">
    <img className='sklimgLoad' src='https://cdn-icons-gif.flaticon.com/6569/6569130.gif' label='Error' />
    <h2 className="titleCardDashBoard">Cargando</h2>
    <p className="pCardDashBoard">Espere unos segundos mientras carga la información</p>
    </article> 
      );
    

     
}

export {TodosError};