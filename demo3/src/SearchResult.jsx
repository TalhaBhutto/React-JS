import React from "react";


const SearchResult=(Pr)=>{
    const ISource=`https://source.unsplash.com/400x300/?${Pr.name}`;
  return(<>
  <img src={ISource} style={{margin:"20px 0px 0px 100px"}}/>
  </>);  
}

export default SearchResult;