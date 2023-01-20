import React from 'react';
import logo from '../logo.svg'

export default function NavBar(){
    return(
        <nav className="nav-container">
            <img src={logo} alt="logo" width="60px"/>
            <h3>ReactFacts</h3>
            <h4 className="p-title">React - Project 1</h4>
        </nav>
    );
}