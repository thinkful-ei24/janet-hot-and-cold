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
            guessList: [],
            number:0,
            feedback: 'Make Your Guess',
            placeHolder: 'Enter Your Guess'
        }  
    }


handleFeedback(arg){
    if(parseInt(arg) === this.state.randomNum){
        this.setState({feedback: 'WINNER!'});
    }   else if(Math.abs(this.state.randomNum - parseInt(arg)) < 10){
        this.setState({feedback: 'HOT'});
        } 
        else if(Math.abs(this.state.randomNum - parseInt(arg)) < 20 && Math.abs(this.state.randomNum - parseInt(arg)) > 9){
            this.setState({feedback: 'KINDA HOT'});
        } 
        else if(Math.abs(this.state.randomNum - parseInt(arg)) < 30 && Math.abs(this.state.randomNum - parseInt(arg)) > 19){
            this.setState({feedback: 'LESS THAN WARM'});
        } else {
            this.setState({feedback: 'COLD'});
        }
    }
    
  render(){

    return (
        <div>
            <Header newGame={(e) => {
                this.setState({
                    randomNum: Math.floor(Math.random() * 101),
                    guessCount: 0,
                    guessList: [],
                    number: 0,
                    feedback: 'Make Your Guess',
                    placeHolder: 'Enter Your Guess'

                });

                
            }}/>

            <GuessSection placehold= {this.state.placeHolder}  submit={e=>{
                e.preventDefault();
                let currentInput = e.currentTarget.elements['userGuess'].value;

                console.log(parseInt(currentInput));
                if(isNaN(parseInt(currentInput))){
                    alert('Please input a number');
                } else {
                    this.setState({number: parseInt(currentInput)});
                    console.log("I'm Not submitting");
                    this.setState({guessList:[...this.state.guessList, currentInput]});
                    e.target.reset();
                 
                   
                }
                this.handleFeedback(currentInput);
                
               }}
               
               feedback= {this.state.feedback}
               
               />


            <GuessCount count={this.state.guessList.length} />
            <GuessList guesses={this.state.guessList} />
        </div>
    );

  }
}


  export default Game

