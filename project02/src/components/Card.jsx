import React from 'react';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';


export default function Card(){
    return(
        <div className="card-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}