import React from 'react';
import Play from './playArea';
import GuessTracker from './guessTracker';
import Header from './header';
import HotorCold from './HotorCold';

export default function GameBoard(props){

    return(
        <section>
            <Header/>
                 <HotorCold/>
                 <Play/>
                 <GuessTracker/>  
        </section>
     
    )
};