import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{

    return(<>
    <NavLink exact activeClassName="active_class" to="/"> ABout Us</NavLink>
    <NavLink exact activeClassName="active_class" to="/Contact">Contact</NavLink>
    <NavLink exact activeClassName="active_class" to="/Search">Search</NavLink>
    <NavLink exact activeClassName="active_class" to="/Contact/Twitter">Twitter</NavLink>
    <NavLink exact activeClassName="active_class" to="/User/Talha/Bhutto">User</NavLink>
    </>);
    
}
export default Menu;