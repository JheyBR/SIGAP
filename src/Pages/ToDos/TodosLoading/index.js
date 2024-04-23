import React from 'react';
//import '../../App.css';
import '../ToDos.css';
import './TodosLoading.css';

function TodosLoading() 
                            
{
    return (
        
        
        <article className="sklLoading">
            <img className="sklimgLoad" src='https://cdn-icons-gif.flaticon.com/8800/8800954.gif' label='Loading' />
            <div class='sklDiv'>
                <h2 className="titleSklLoad">Cargando</h2>
                <p className="pSklLoad">Espere unos segundos mientras carga la información</p>
            </div>
        </article>
       

    );
      
}

export {TodosLoading};

