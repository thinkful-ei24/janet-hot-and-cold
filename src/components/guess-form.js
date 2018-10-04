import React from 'react';

import './guess-form.css';

export default function GuessForm (props){
  
        return (
           
            <form name='janet' onSubmit={props.submit}>

                <input type="text" maxLength='3' name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={props.placehold} required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }




