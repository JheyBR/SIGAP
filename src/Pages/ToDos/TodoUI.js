import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BarraSuperior } from '../../ppal/BarraSuperior';
import { BarraSecundaria } from '../../ppal/BarraSecundaria';
import { FooterApp } from '../../ppal/FooterApp';
import { LeftBarra } from '../../ppal/LeftBarra';
import { MenuLeftBarra } from '../../ppal/MenuLeftBarra';
import { ToDoLIst } from './ToDoList';
import { ToDoPage } from './ToDoPage';
import { ToDoSection } from './ToDoSection';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { TodosEmpty } from './TodosEmpty';
import { defaulttitleleftbarra, defaulListToDo, defaultImgUseEffect } from '../../App_data';
import '../../App.css';
import './ToDos.css';
import React from 'react';

 function TodoUI ({searchValue, 
  setSearchValue, 
  todoTotal,
  todocompleted, 
  todoRest, 
  ValToDox,
  completeToDo,
  deleteToDo,
  searchedToDo,
  defaulttitleleftbarra,
  loading,
  error}) 

{
   
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
         {loading && <TodosLoading></TodosLoading> }
            {error && <TodosError></TodosError>}
            {(!loading && searchedToDo.length === 0 ) && <TodosEmpty></TodosEmpty>} 
           
            
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

export {TodoUI};