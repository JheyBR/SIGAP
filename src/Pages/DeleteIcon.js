import React from "react";
import '../App.css';
import { CiCircleRemove } from "react-icons/ci";

function DeleteIcon (props) {
    return(
        <span onClick={props.onDelete} className="Icon Icon-delete">

        <CiCircleRemove 
                        size={30} 
                        />
        </span>
    )
    }
    

export {DeleteIcon};