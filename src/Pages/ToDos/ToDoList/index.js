import React from 'react';
import './ToDoList.css';
import { CiCircleRemove, CiCircleCheck } from "react-icons/ci";

function ToDoLIst(props) {
 
 return (
    <article className="toDoList">
      <CiCircleCheck
          onClick={props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}  
          size={30} 
      />
      <p 
        className={`toDoList-p
        ${props.completed && "toDoList-p--complete"}`}
      >
        {props.titleToDo}
      </p>
      <CiCircleRemove
          onClick={props.onDelete} className="Icon Icon-delete" 
          size={30} 
      />
    </article>
  );
}

export { ToDoLIst };