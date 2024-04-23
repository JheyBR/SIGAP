import React from 'react';
//import '../../App.css';
import '../ToDos.css';
import './TodosEmpty.css';




function TodosEmpty(props) {
   
 

  return (

    <article className="sklLoading">
    <img className='sklimgLoad' src='https://cdn-icons-gif.flaticon.com/8716/8716767.gif' label='Empty' />
    <h2 className="titleCardDashBoard">Cargando</h2>
    <p className="pCardDashBoard">Espere unos segundos mientras carga la información</p>
    </article>


  );

     
}

export {TodosEmpty};