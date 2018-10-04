import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            randomNum: Math.floor(Math.random()*101),
            guessCount: 0,
            guessList: []
        }  
    }



  render(){
    console.log('hello');

    return (
        <div>
            <Header />
            <GuessSection InputValue={e=>this.input=e} submit={e=>{
                e.preventDefault();
                console.log(this.input.value);
                console.log("I'm Not submitting");
               }}/>
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );

  }
}


  export default Game

