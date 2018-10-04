import React from 'react';

import './guess-form.css';

export default function GuessForm (props){
  
        return (
            <form onSubmit={props.submit}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required ref={props.InputValue}/>
    
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }




