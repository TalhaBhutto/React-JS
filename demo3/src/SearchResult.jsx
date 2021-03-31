import React from "react";


const SearchResult=(Pr)=>{
    const ISource=`https://source.unsplash.com/user/${pr.name}/600x400`;
  return(<>
  <img src={ISource} style={{margin:"70px 0px 0px 300px"}}/>
  </>);  
}

export default SearchResult;