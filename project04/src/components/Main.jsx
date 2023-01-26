import React from 'react';
import Card from './Card';
import data from '../data';

export default function Main(){
    const card = data.map((data)=>{
        return <Card
            key = {data.id}
            {...data}
        />
    })
    return(
        <div className="main-sec">
            {card}
        </div>
    )
}