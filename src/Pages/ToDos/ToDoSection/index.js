
import React from 'react';
import '../../../App.css';
import './ToDoSection.css';
import ToDoCounter from '../ToDoCounter';


function ToDoSection(props) {
 
  /*console.log(props.valToDo);*/

  return(
    <div>
      <div className="toDoSection">
        <h2 className="toDoHeader">Tareas Por Hacer</h2>
        <input  
          className="inputToDo" 
          placeholder="Busca la tarea"
          value={props.searchValue}
          onChange={(event) => {
            props.setSearchValue(event.target.value)
            }
          
          }
        />
                  
        <article className="btnToDoHeader">
            <button 
              className="btnAddToDo"
              onClick={
                (event) => { 
                  console.log('Le diste Click') 
                  console.log(event) 
                  console.log(event.target) 
                }
              }
              >
                              
            </button>
        </article>
        <ToDoCounter 
          todoTotal={props.todoTotal} 
          todocompleted={props.todocompleted} 
          todoRest={props.todoRest}
          valToDo={props.valToDo}
                    
        />
{/* {`toDoSectionList
        ${(props.todoRest===0) && "toDoSectionLis--skl"}`} */}

        

      </div>
      <div className={`${props.todoRest === 0 ? 'toDoSectionList--skl' : 'toDoSectionList--other'}`}>
        <ul className="toDoSectionListUl">
          {props.children}
        </ul>
      </div>
    </div>
  )
}

  export { ToDoSection };