import React, { useState } from "react";
const App = ()=>{
  const [inputList,SetInputList]=useState("");
  const itemEvents=(event)=>{
    SetInputList(event.target.value);
  }
  return(
  <div className="MainDiv">
    <div className="centerDiv">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="Add Item" onChange={itemEvents}/>
      <button> + </button>
      <ol>
        <li>{inputList}</li>
      </ol>
    </div>
  </div>
  );
};
export default App;