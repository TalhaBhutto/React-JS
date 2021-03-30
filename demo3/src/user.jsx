import React from "react";
import {useParams} from "react-router-dom";

// const User=({match})=>{
//     return (<>
//     <h1>Hello dear {match.params.name} user.</h1>
//     </>);
// }
const User=()=>{
    const fname=useParams();
    return (<>
    <h1>Hello dear {fname} user.</h1>
    </>);
}

export default User;