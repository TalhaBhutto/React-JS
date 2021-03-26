import React, { useState } from "react";
import List from "./list";
const App = ()=>{
  const [inputList,SetInputList]=useState("");
  const [inputPrice,SetInputPrice]=useState("");
  const [items,SetItems]=useState([]);
  const itemEvents=(event)=>{
    SetInputList(event.target.value);
  }
  const [expence,Setexpence]=useState(0);
  let Exp=0;
  const PriceEvents=(event)=>{
    SetInputPrice(event.target.value);
  }
  const ListOfItems=()=>{
    SetItems((OItems)=>{
      return [...OItems,{item:inputList+" : ",price:inputPrice}]
    });
    SetInputList("");
    SetInputPrice("");
    Exp=parseInt(expence)+parseInt(inputPrice);
    Setexpence(Exp);
  }
  const DeleteItems=(id,price)=>{
      SetItems((OldItems)=>{
        return OldItems.filter((arrElem,index)=>{
          return index != id;
        });
      });
      Exp=parseInt(expence)-parseInt(price);
      Setexpence(Exp);  
  };
  return(
  <div className="MainDiv">
    <div className="centerDiv">
      <br/>
      <h1 className="heading">Expense Teacker</h1>
      <br/>
      <h1 className="result">Total : {expence} RS</h1>
      <input type="text" placeholder="Add Item" onChange={itemEvents} value={inputList} />
      <input type="number" placeholder="Add Price" onChange={PriceEvents} value={inputPrice} />
      <button onClick={ListOfItems}> + </button>
      <ol>
        {items.map((itemV,index)=>{
          return <List text={itemV} key={index} id={index} onSelect={DeleteItems}/>
        })}
      </ol>
    </div>
  </div>
  );
};
export default App;