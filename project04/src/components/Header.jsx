import React from 'react';

export default function Header(){
    return(
        <nav className="nav-bar">
            <div className="logo-container">
                <span className="logo-icon"><i class="fa-solid fa-earth-americas"></i></span>
                <span className="nav-title">my travel journal</span>
            </div>
        </nav>
    )
}