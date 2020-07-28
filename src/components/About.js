import React from 'react';
import { AboutCompany } from "./AboutCompany";
import { AboutDevelopers } from "./AboutDevelopers";
import { Route, NavLink } from 'react-router-dom';
const active = {color: 'red'};

export const About = () => {
    return (
        <>
            <NavLink to='/about/company' activeStyle={active}>About Company</NavLink>
            <NavLink to='/about/developers/11' activeStyle={active}>About Developers</NavLink>

            <Route path="/about/company" component={AboutCompany}/>
            <Route path="/about/developers/:id" component={AboutDevelopers}/>        
        </>
    )
}