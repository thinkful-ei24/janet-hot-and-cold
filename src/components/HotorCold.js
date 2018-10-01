import React from 'react';

export default function HotorCold (props) {

    return (
        <div>
            <h2>{props.guesshint}</h2>
            </div>
    )
       
    
}

HotorCold.defaultProps= {
    guesshint: 'Make Your Guess'
}