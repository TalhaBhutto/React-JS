import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios=()=>{
    const [num,SetNum]=useState("nothing");
    useEffect(()=>{
        
    });
return (<>
<h1>You have choosen {num}.</h1>
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