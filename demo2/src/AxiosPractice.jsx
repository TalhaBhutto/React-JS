import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios=()=>{
    let display=false
    const [num,SetNum]=useState("nothing");
    const [name,SetName]=useState();
    const [moves,SetMoves]=useState();
    const []=useState();
     useEffect(()=>{
        async function getD(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemo/${num}`);
            SetName(res.data.name);
            SetMoves(res.data.length);
        }
        getD();    
    });   
return (<>
<h1>You have choosen <span style={{color:"red"}}>{num}.</span></h1>
{
    if(display)
}
<select style={{marginBottom:"200px",marginLeft:"30px"}} value={num} onChange={(event)=>{SetNum(event.currentTarget.value)}}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
<br/>
</>);
}
export default Axios;