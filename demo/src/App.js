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
    const [ctime2,setCtime2]=useState(newTime);
    const Update_time=()=>{
      setCtime(newTime);
    }
    const Update_time2=()=>{
      let time2=new Date().toLocaleTimeString();
      setCtime2(time2);
    }
    setInterval(Update_time2,1000);
    const [bg,Nbg]=useState("#9b59b6");
    const [Bname,NewName]=useState("Click to Change Theme");
    const bgChange=()=>{
      Nbg("white");
      NewName("AB double Click bhi Krlo 😉");
    }
    const bgChange2=()=>{
      Nbg("#9b59b6");
      NewName("Click to Change Theme");
    }
    const [MyFirstName,MyNewFirstName]=useState("");
    const GetFirstName=(event)=>{
      MyNewFirstName(event.target.value);
    }
    const [MySecondName,MyNewSecondName]=useState("");
    const GetSecondName=(event)=>{
      MyNewSecondName(event.target.value);
    }
    const [MyFullName,SetMyFullName]=useState("Hello");
    const UpdateName=(event)=>{
      event.preventDefault();
      SetMyFullName("Hello "+MyFirstName+" "+MySecondName);
      MyNewFirstName("");
      MyNewSecondName("");
    }
    const [Fl_N,N_Fl_N]=useState({fname:"",lname:"",email:"",number:""});
    const U_Name=(event)=>{
      let N=event.target.name;
      let V=event.target.value;
      N_Fl_N((pre)=>{
        if(N=="fname"){
         return{ 
          fname:V,
          lname:pre.lname,
          email:pre.email,
          number:pre.number}
        }
        else if(N=="lname"){
          return{ 
           fname:pre.fname,
           lname:V,
           email:pre.email,
           number:pre.number}
         }
         else if(N=="email"){
          return{ 
           fname:pre.fname,
           lname:pre.lname,
           email:V,
           number:pre.number}
         }
         else if(N=="number"){
          return{ 
           fname:pre.fname,
           lname:pre.lname,
           email:pre.email,
           number:V}
         }
      });
    };
  return (
    <div className="App" style={{backgroundColor:bg}}>
      <div className="buttonz">
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    <h1>Click on this button to update time {ctime}</h1>
    <button onClick={Update_time}>Get Time ⬆️</button>
    <h1>{ctime2}</h1>
    <h1>{MyFullName}</h1>
    <form onSubmit={UpdateName}>
    <input type="Text" placeholder="Enter First Name" onChange={GetFirstName}/><br/>
    <input type="Text" placeholder="Enter Last Name" onChange={GetSecondName}/><br/>
    <button type="submit">Click Me 👍</button>
    </form>
    <form>
      <h1>Hello {Fl_N.fname} {Fl_N.lname}</h1><br/>
      <p>{Fl_N.email}</p>
      <p>{Fl_N.number}</p>
      <input type="Text" name="fname" onChange={U_Name} placeholder="Enter Your Second Name" value={Fl_N.fname}></input><br/>
      <input type="Text" name="lname" onChange={U_Name} placeholder="Enter Your Second Name" value={Fl_N.lname}></input><br/>
      <input type="email" onChange={U_Name} placeholder="Enter your email" value={Fl_N.email} name="email"/><br/>
          <input type="number" onChange={U_Name} placeholder="Enter your number" value={Fl_N.number} name="number" /><br/>    
    </form>
    </div>
    <div><button className="B2" onClick={bgChange} onDoubleClick={bgChange2}>{Bname}</button></div>
    
      <Dinners/>
      <h1>My Favourite 5 Movies</h1>
    </div>
  );
}

export default App;
