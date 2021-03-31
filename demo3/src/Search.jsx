import React, { useState } from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";


const Search=()=>{
    const [image,NewImage]=useState("");
    const InputEvent=(event)=>{
        const data=event.target.value;
        NewImage(data);
    }
  return(<>
  <div style={{color:"red", margin:"20px 0px 0px 400px"}}>
        <input type="text" onChange={InputEvent} value={image} placeholder="Search Anything"/>
  </div>
  </>);  
}

export default Search;