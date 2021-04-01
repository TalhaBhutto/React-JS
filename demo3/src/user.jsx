import React from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";

// const User=({match})=>{
//     return (<>
//     <h1>Hello dear {match.params.name} user.</h1>
//     </>);
// }
const User=()=>{
    const history=useHistory();
    const {fname,lname}=useParams();
    const location = useLocation();
    return (<>
    <h1>Hello dear {fname} {lname}. Wellcome</h1>
    <p>My current location is {location.pathname}</p>
    {
        location.pathname===`/User/Talha/Hussain`?<button onClick={()=>history.push("/")}>Back</button>:null
    }
    </>);
}

export default User;