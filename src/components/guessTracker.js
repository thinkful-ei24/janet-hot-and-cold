import React from 'react';
import Guess from './HotorCold';

export default function GuessTracker(props){
    return(
        <div>
            {props.guesses}
        </div>
    );
}

GuessTracker.defaultProps={guesses: ''};