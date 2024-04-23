import React from 'react';
//import '../../App.css';
import '../ToDos.css';




function ToDoCounter(props) {
   
 

   return (
    <div className="counterToDo">
      <p className={`${props.valToDo && "withoutToDos"}`}> Has realizado 
    
        <span> {props.todocompleted} </span> 
        tareas de 
        <span> {props.todoTotal} </span> 
        listadas 
      </p>
      <p> Tienes pendientes 
        <span> {props.todoRest} </span> 
        por hacer 
      </p>
      <p className= {`counterInfo ${props.valToDo && "withoutToDosShow"}`}> Muy Bien ya no tienes Tareas Pendientes</p>
    </div>
      );

     
}

export default ToDoCounter;