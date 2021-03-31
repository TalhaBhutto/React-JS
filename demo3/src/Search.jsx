import React, { useState } from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";


const Search=()=>{
    const [image,NewImage]=useState("");
    const InputEvent=(event)=>{
        const data=event.target.value;
        NewImage(data);
    }
  return(<>
  <div style={{color:"red"}}>
  <input type="text" onChange={InputEvent} value={image} placeholder="Search ANything"></input>
  </div>
  </>);  
}

export default Search;