import React from 'react';

export default function Play (props){
   return(
    <div>
        <form>
            <input type= 'text' placeholder='Enter Your Guess' >
            </input>

            <input type = 'submit' value='Guess'>
            </input>
            </form>
            <p>Guess # {props.counter}</p>
            </div>
   );
}

Play.defaultProps={counter: 0};


