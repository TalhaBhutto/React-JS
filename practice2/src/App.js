import React, { useState } from "react";
import List from "./list";
const App = ()=>{
  const [inputList,SetInputList]=useState("");
  const [items,SetItems]=useState([]);
  const itemEvents=(event)=>{
    SetInputList(event.target.value);
  }
  const ListOfItems=()=>{
    SetItems((OItems)=>{
      return [...OItems,inputList]
    });
    SetInputList("");
  }
  return(
  <div className="MainDiv">
    <div className="centerDiv">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="Add Item" onChange={itemEvents} value={inputList} />
      <button onClick={ListOfItems}> + </button>
      <ol>
        {items.map((itemV)=>{
          return <List text={itemV} />
        })}
      </ol>
    </div>
  </div>
  );
};
export default App;