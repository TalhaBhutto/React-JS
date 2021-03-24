import './App.css';
import Dinners from "./dinner";
import React, {useState} from "react";

const Education=[
  {I_name:"DASKBZ" ,Passing_Year:2015 , degree:"Matric Science" },
  {I_name:"NCR-CET" ,Passing_Year:2017 , degree:"Inter Science" },
  {I_name:"UoK" ,Passing_Year:2022 , degree:"BS-Software Engineering" }
]
const data=Education.map((cval)=>{
return `I have done my ${cval.degree} from ${cval.I_name} in ${cval.Passing_Year}`
});
console.log(data);
function App() {
  const state=useState();
  const [count,setCount] =useState(0);

  const IncNum=()=>{
    setCount(count+1);
    };  
    let newTime=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newTime);
    const Update_time=()=>{
      setCtime(newTime);
    }
    setInterval(Update_time,2000);
  return (
    <div className="App">
      <div className="buttonz">
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    <h1>{ctime}</h1>
    <button onClick={Update_time}>Get Time</button>
    <h1>{ctime}</h1>
    </div>
      <Dinners/>
      <h1>My Favourite 5 Movies</h1>
    </div>
  );
}

export default App;
