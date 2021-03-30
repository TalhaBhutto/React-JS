import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios=()=>{
    const [display,SetDisplay]=useState(false);
    const [num,SetNum]=useState("nothing");
    const [name,SetName]=useState();
    const [moves,SetMoves]=useState();
    const []=useState();
     useEffect(()=>{
        async function getD(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            SetName(res.data.name);
            SetMoves(res.data.moves.length);
            SetDisplay(true);
        }
        getD();    
    });   
return (<>
<h1>You have choosen <span style={{color:"red"}}>{num}.</span></h1>
{
    display?<><h1>This is <span style={{color:"red"}}>{name}.</span></h1><h1>{name} has <span style={{color:"red"}}>{moves}.</span> moves.</h1></>:<h1>No info to Display.</h1>
}
<select style={{marginBottom:"200px",marginLeft:"30px"}} value={num} onChange={(event)=>{SetNum(event.currentTarget.value)}}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="25">25</option>
</select>
<br/>
</>);
}
export default Axios;