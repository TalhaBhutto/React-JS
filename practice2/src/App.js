import React from "react";
const App = ()=>{

  return(
  <div className="MainDiv">
    <div className="centerDiv">
      <br/>
      <h1>ToDO List</h1>
      <br/>
      <input type="text" placeholder="Add Item"/>
      <button> + </button>
      <ol>
        <li>buy Apple</li>
      </ol>
    </div>
  </div>
  );
};
export default App;