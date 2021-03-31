import React from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";


const SearchResult=()=>{
    const ISource="https://source.unsplash.com/user/erondu/1600x900";
  
  return(<>
  <img src={ISource}/>
  </>);  
}

export default SearchResult;