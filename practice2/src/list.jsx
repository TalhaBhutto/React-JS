import React from "react";
const List =(props)=>{
    
    return(
        <div className="todo_style">
            <i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id,props.text.price)}}/>
            <li>{props.text.item}{props.text.price}</li>
        </div>
        );
}
export default List