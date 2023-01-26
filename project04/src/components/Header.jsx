import React from 'react';

export default function Header(){
    return(
        <nav className="nav-bar">
            <div className="logo-container">
                <span className="logo-icon"><i className="fa-solid fa-earth-americas"></i></span>
                <span className="nav-title"> my travel journal</span>
            </div>
        </nav>
    )
}