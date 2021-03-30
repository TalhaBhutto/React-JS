import React from "react";
import {useParams,useLocation} from "react-router-dom";

// const User=({match})=>{
//     return (<>
//     <h1>Hello dear {match.params.name} user.</h1>
//     </>);
// }
const User=()=>{
    const {fname,lname}=useParams();
    const location = useLocation();
    return (<>
    <h1>Hello dear {fname} {lname}</h1>
    </>);
}

export default User;