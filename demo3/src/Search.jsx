import React, { useState } from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";


const Search=()=>{
    const [image,NewImage]=useState();
  return(<>
  <div style={{margin:"20px 100px 20px 0px"}}>
  <input type="text" onChange={} placeholder="Search ANything"></input>
  </div>
  </>);  
}

export default Search;