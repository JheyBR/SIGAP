import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BarraSuperior } from '../ppal/BarraSuperior';
import { BarraSecundaria } from '../ppal/BarraSecundaria';
import { FooterApp } from '../ppal/FooterApp';
import { LeftBarra } from '../ppal/LeftBarra';
import { MenuLeftBarra } from '../ppal/MenuLeftBarra';
import { ToDoLIst } from './ToDoList';
import { ToDoPage } from './ToDoPage';
import { ToDoSection } from './ToDoSection';
import { defaulttitleleftbarra, defaulListToDo } from '../App_data';
import React from 'react';
import '../App.css';
import './css/ToDos.css';

/*localStorage.setItem('LSListToDO_V1, defaultListToDo');
localStorage.removeItem('LSListToDO_V1');
const stToDo = JSON.stringify(defaulListToDo)
  localStorage.setItem('LSListToDO_V1 ', stToDo)*/

   
function ToDos() {

  /*let stToDo = JSON.stringify(defaulListToDo)
  localStorage.setItem('LSListToDO', stToDo)*/


    let parsedToDo;   

    let localStorageTodo = localStorage.getItem('LSListToDO');

    if (!localStorageTodo) {
      localStorage.setItem('LSListToDO', JSON.stringify([]));
      parsedToDo = [];
    }else {
      parsedToDo = JSON.parse(localStorageTodo);
    }

  const [searchValue, setSearchValue] = React.useState('');
  const [ToDos, setToDos]  = React.useState(parsedToDo); 
 

  const searchedToDo = ToDos.filter(
    (toDo)=> {  
      const toDotext = toDo.titleToDo.toLowerCase();
      const searchtoDo = searchValue.toLowerCase();
      return toDotext.includes(searchtoDo);
    }
  );

const saveToDos = (newToDos) => {
  localStorage.setItem('LSListToDO', 
  JSON.stringify(newToDos)) 
  setToDos(newToDos);
  console.log('prueba ',newToDos);
}

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

  
    
    return (
      <React.Fragment>
          <BarraSuperior />
          <BarraSecundaria />
          <ToDoPage >  
          <MenuLeftBarra >
                {defaulttitleleftbarra.map(titleleftarray => (
                  <LeftBarra
                  key={titleleftarray.leftoption} 
                  leftoption={titleleftarray.leftoption} 
                  iconleft={titleleftarray.iconleft}
                  linkleft={titleleftarray.linkleft}
                  /> ))}  
              </MenuLeftBarra>  
            <ToDoSection 
               searchValue={searchValue}
               setSearchValue={setSearchValue}
               todoTotal={todoTotal}
               todocompleted={todocompleted}
               todoRest={todoRest}
               valToDo={ValToDox}
               
            >
              {searchedToDo.map(ToDos => (
                <ToDoLIst
                  key={ToDos.titleToDo} 
                  checkToDo={ToDos.checkToDo} 
                  titleToDo={ToDos.titleToDo} 
                  stateToDo={ToDos.stateToDo}
                  completed={ToDos.completed}
                  onComplete={() => completeToDo(ToDos.titleToDo)}
                  onDelete={() => deleteToDo(ToDos.titleToDo)}
                 
        
                /> ))} 
            </ToDoSection>
          </ToDoPage>
          <FooterApp />
      </React.Fragment>
      );
}

export default ToDos;