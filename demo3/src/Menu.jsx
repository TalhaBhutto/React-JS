import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{

    return(<>
    <NavLink exact activeClassName="active_class" to="/"> ABout Us</NavLink>
    <NavLink exact activeClassName="active_class" to="/YehContactPageHay">Contact</NavLink>
    <NavLink exact activeClassName="active_class" to="/YehContactPageHay/TwitterID">Twitter</NavLink>
    <a/>);
}
export default Menu;