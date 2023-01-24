import React from 'react';
import Card from './Card';
import data from '../data';


export default function Slider(){

    const card = data.map((item)=>{
        // <Card/>
        return(
            <Card
                key={item.id}
                {...item}
            /> 
        )
    })

    return(
        <div className="c-cont">
            {card}
        </div>
    )
}