

import {useLocalStorage} from './Components/useLocalStorage';
import React from 'react';
import { TodoUI } from './TodoUI';
//import { defaulListToDo } from '../../App_data';
import { defaulttitleleftbarra  } from '../../App_data';


// localStorage.removeItem('LSListToDO');

// const defaulListToDo =[ 
//   {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
//   {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
//   {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
//   {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
// ];

// localStorage.setItem('LSListToDO',JSON.stringify(defaulListToDo))


   
function ToDos() {

  /*let stToDo = JSON.stringify(defaulListToDo)
  localStorage.setItem('LSListToDO', stToDo)   /*NO BORRAR*/

  const {
      item: ToDos, 
      saveItem: saveToDos,
      loading,
      error,
    }  
      = useLocalStorage('LSListToDO', []); 

  const [searchValue, setSearchValue] = React.useState('');
 

  const searchedToDo = ToDos.filter(
    (toDo)=> {  
      const toDotext = toDo.titleToDo.toLowerCase();
      const searchtoDo = searchValue.toLowerCase();
      return toDotext.includes(searchtoDo);
    }
  );

  const completeToDo = (titleToDo) => {
    let newToDos = [...ToDos];
    let toDoIndex = newToDos.findIndex(
      (toDo) => toDo.titleToDo === titleToDo
    );
    newToDos[toDoIndex].completed = true;
      saveToDos(newToDos);
  };

  const deleteToDo = (titleToDo) => {
    let newToDos = [...ToDos];
    console.log(newToDos);
    let toDoIndex = newToDos.findIndex(
      (toDo) => toDo.titleToDo === titleToDo
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
    
  };


  const todoTotal = ToDos.length;
  const todocompleted = ToDos.filter(
    ToDoc => ToDoc.completed).length;
  const todoRest = todoTotal - todocompleted;

  const valToDo = (todoRest) => {
    if (todoRest===0){
       return true
     } else {
      return false
     }
  }

  const ValToDox = valToDo(todoRest);

  
    
   return (<TodoUI
    
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todoTotal={todoTotal}
      todocompleted={todocompleted}
      todoRest={todoRest}
      ValToDox={ValToDox}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
      searchedToDo={searchedToDo}
      defaulttitleleftbarra={defaulttitleleftbarra}
      loading={loading}
      error={error}
         
   />);
}

export default ToDos;